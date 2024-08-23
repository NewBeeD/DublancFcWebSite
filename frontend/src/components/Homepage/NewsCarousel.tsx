"use client"

import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';


import useScreenSize from "@/util/windowDimension";
import fromDataToArticleType from "@/lib/ArticlesUtilities/CreateArticleTypeStructure/ArticleTypeStructure";

import Link from "next/link";

import { useEffect, useState, useRef } from "react";
import qs from 'qs'

import styles from '../../styles/NewsCarousel.module.css'



export interface ArticleObject {

  id: number,
  title: string,
  content: string, 
  author: string,
  category: string,
  image: string,
  created: Date,
  video?: string,
  headline?: boolean
}

const HeadlineCarousel = async () => {

  const [articles, setArticle] = useState<ArticleObject[]>([])
  const { width, height } = useScreenSize() 
  const sliderRef_One = useRef<Slider | null>(null)
  const sliderRef_Two = useRef<Slider | null>(null)
  const sliderRef_Three = useRef<Slider | null>(null)
  
  useEffect(()=>{
      
      const params_articles = {

        populate: {
          image: {
            populate: true
          }
        }
      }

      const query_params_article = qs.stringify(params_articles)

      fetch(`https://dfcrestapi.onrender.com/api/articles?${query_params_article}`)
      .then((res) => res.json())
      .then((data) => {      

        const final_data: ArticleObject[] = fromDataToArticleType(data.data)
        setArticle(final_data)
      })
      .catch((error) =>{

        throw new Error(error)
      })      
    
  }, [])
  

  const settings = {

    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: false, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  
  
  return (

    <Box sx={{ backgroundColor: 'black'}} paddingY={5} position='relative'>

      <Box paddingY={3} >

        <Box paddingLeft={{ xs: 2}} paddingBottom={2}>
          <Typography variant="h5" style={{ fontWeight: 'bold'}} color='white'>
            News.
          </Typography>

          <Typography color='white'>
            Headlines from around the club
          </Typography>
        </Box>

        <Box display={{ xs: 'inherit', sm: 'none'}} >

          <Slider {...settings} ref={sliderRef_One}>

            {articles && articles.filter(news => news.headline != true).map((item, idx) => (

              <Box className={styles.slickSlide} >

                <Card key={idx} sx={{ maxWidth: 350, height: 300}} >

                  <Box width='100%' height={300} >

                    <Link href={`/articles/${item.id}`}>
                      <CardMedia component='img' image={item.image} style={{ objectFit: 'cover', objectPosition: "50% 50%"}} sx={{ height: {xs: '100%'}, width: '100%'}}/>
                    
                    </Link>


                  </Box>

                </Card>

                <Box paddingLeft={1}>

                  <Box>
                    <Typography color='#13f01e' fontWeight={900}>{item.category}</Typography>
                  </Box>


                  <Box>
                    <Link href={`/articles/${item.id}`}>
                      <Typography color='white'>
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>

                </Box>


              </Box>


            ))}


          </Slider>

          <Box sx={{ position: 'absolute', top: '70px', right: '2px', zIndex: 2}}>

            <Stack  direction='row' >

              <IconButton onClick={() => sliderRef_One.current?.slickPrev()}>
                <ArrowCircleLeftIcon sx={{ color: '#13f01e', fontSize: '40px'}}/>
              </IconButton>

              <IconButton onClick={() => sliderRef_One.current?.slickNext()}>
                <ArrowCircleRightIcon sx={{ color: '#13f01e', fontSize: '40px'}}/>
              </IconButton>

            </Stack>

          </Box>

        </Box>

        <Box display={{ xs: 'none', sm: 'inherit', md: 'none'}} >

          <Slider {...settings} ref={sliderRef_Two}>

            {articles && articles.filter(news => news.headline != true).map((item, idx) => (

              <Box>

                <Card key={idx} sx={{ maxWidth: 350, height: 300}} >

                  <Box width='100%' height={300} >

                    <Link href={`/articles/${item.id}`}>
                      <CardMedia component='img' image={item.image} style={{ objectFit: 'cover', objectPosition: "50% 50%"}} sx={{ height: {xs: '100%'}, width: '100%'}}/>
                    </Link>


                  </Box>

                </Card>

                <Box paddingLeft={1}>

                  <Box>
                    <Typography color='#13f01e' fontWeight={900}>{item.category}</Typography>
                  </Box>


                  <Box>

                    <Link href={`/articles/${item.id}`}>
                      <Typography color='white'>
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>

                </Box>
                
              </Box>

              

            ))}

          </Slider>

          <Box sx={{ position: 'absolute', top: '70px', right: '30px', zIndex: 2}}>

            <Stack  direction='row'>

              <IconButton onClick={() => sliderRef_Two.current?.slickPrev()}>
                <ArrowCircleLeftIcon sx={{ color: '#13f01e', fontSize: '40px'}}/>
              </IconButton>

              <IconButton onClick={() => sliderRef_Two.current?.slickNext()}>
                <ArrowCircleRightIcon sx={{ color: '#13f01e', fontSize: '40px'}}/>
              </IconButton>

            </Stack>

          </Box>

        </Box>

        <Box display={{ xs: 'none', sm: 'none', md: 'inherit'}} >

          <Slider {...settings} ref={sliderRef_Three}>

            {articles && articles.filter(news => news.headline != true).map((item, idx) => (

              <Box paddingLeft={3}>

                <Card key={idx} sx={{ maxWidth: 350, height: 300, overflow: 'hidden'}}>

                  {/* <Image src={item.image} alt="Player" quality={100} width={width > 1260?400:width} height={300} style={{ objectFit: 'cover', objectPosition: "center 70%"}}/> */}

                  <Box width='100%' height={300} >

                    <Link href={`/articles/${item.id}`}>
                      <CardMedia 
                      component='img' 
                      image={item.image} 
                      style={{ objectFit: 'cover', objectPosition: "50% 50%"}} 
                      sx={{ height: {xs: '100%'}, width: '100%'}}/>
                    </Link>


                  </Box>

                </Card>

                <Box paddingLeft={1}>

                  <Box>
                    <Typography color='#13f01e' fontWeight={900}>{item.category}</Typography>
                  </Box>


                  <Box>
                    <Link href={`/articles/${item.id}`}>
                      <Typography color='white'>
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>

                </Box>
              </Box>


            ))}

          </Slider>  

          <Box sx={{ position: 'absolute', top: '70px', right: '30px', zIndex: 2}}>

              <Stack  direction='row'>

                <IconButton onClick={() => sliderRef_Three.current?.slickPrev()}>
                  <ArrowCircleLeftIcon sx={{ color: '#13f01e', fontSize: '40px'}}/>
                </IconButton>

                <IconButton onClick={() => sliderRef_Three.current?.slickNext()}>
                  <ArrowCircleRightIcon sx={{ color: '#13f01e', fontSize: '40px'}}/>
                </IconButton>

              </Stack>

          </Box>         

        </Box>

        
      </Box>




    </Box>


      

  );
}

export default HeadlineCarousel;