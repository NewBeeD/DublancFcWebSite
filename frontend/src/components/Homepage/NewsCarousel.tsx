"use client"

import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";


import useScreenSize from "@/util/windowDimension";
import fromDataToArticleType from "@/lib/ArticlesUtilities/CreateArticleTypeStructure/ArticleTypeStructure";

import { useEffect, useState } from "react";
import qs from 'qs'

import styles from '../../styles/NewsCarousel.module.css'



export interface ArticleObject {

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
  
  useEffect(()=>{
      
      const params_articles = {

        populate: {
          article_image: {
            populate: true
          }
        }
      }

      const query_params_article = qs.stringify(params_articles)

      fetch(`https://dublancfc-api.onrender.com/api/articles?${query_params_article}`)
      .then((res) => res.json())
      .then((data) => {      

        const final_data: ArticleObject[] = fromDataToArticleType(data.data)
        setArticle(final_data)
      })
      .catch((error) =>{

        throw new Error(error)
      })      
    
  }, [])
  

  var settings_xs = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: false, 
    arrows: false,
   
  };

  var settings_sm = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true, 
    arrows: false,
   
  };

  var settings_md = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true, 
    arrows: false,
   
  };

  // sx={{margin: 'auto', minWidth: {sm: 700 ,md: 900, lg: 1260}, maxWidth:{sm: 700 ,md: 1199, lg: 1260}}}
  
  
  return (

    <Box className="slider-container" >

      <Box paddingLeft={{ xs: 2}} paddingY={3}>
        <Typography variant="h5" style={{ fontWeight: 'bold'}}>
          News.
        </Typography>

        <Typography>
          Headlines from around the club
        </Typography>
      </Box>

      <Box display={{ xs: 'inherit', sm: 'none'}} >

        <Slider {...settings_xs}>

          {articles && articles.map((item, idx) => (

            <Box className={styles.slickSlide} >

            <Card key={idx} sx={{ maxWidth: 600, height: 350}} >

              <Image src={item.image} alt="Player" quality={100} width={width} height={600} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

            </Card>
            </Box>


          ))}


        </Slider>

      </Box>

      <Box display={{ xs: 'none', sm: 'inherit', md: 'none'}}>

        <Slider {...settings_sm}>

          {articles && articles.map((item, idx) => (

            <Card key={idx} sx={{ maxWidth: 600, height: 300}} >

              <Image src={item.image} alt="Player" quality={100} width={width} height={500} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

            </Card>

          ))}

        </Slider>

      </Box>

      <Box display={{ xs: 'none', sm: 'none', md: 'inherit'}}>

        <Slider {...settings_md}>

        {articles && articles.map((item, idx) => (

          <Card key={idx} sx={{ maxWidth: 400, height: 300}}>

            <Image src={item.image} alt="Player" quality={100} width={width > 1260?400:width} height={300} style={{ objectFit: 'cover', objectPosition: "center 25%"}}/>

          </Card>

        ))}

        </Slider>

      </Box>

    </Box>


      

  );
}

export default HeadlineCarousel;