"use client"

import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";


import useScreenSize from "@/util/windowDimension";
import fromDataToArticleType from "@/lib/ArticlesUtilities/CreateArticleTypeStructure/ArticleTypeStructure";

import { useEffect, useState } from "react";
import qs from 'qs'

import styles from '../../styles/NavBar.module.css'



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
  

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4500,
    cssEase: "linear",
    pauseOnHover: true, 
    arrows: false,
   
  };
  
  
  return (

    <Box className="slider-container">

      <Box display={{ xs: 'inherit', sm: 'none'}}>

        <Slider {...settings}>

          {articles && articles.map((item, idx) => (

            <Card key={idx} sx={{ maxWidth: 600, height: 600}}>

              <Image src={item.image} alt="Player" quality={100} width={width} height={600} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

            </Card>

          ))}


        </Slider>

      </Box>

      <Box display={{ xs: 'none', sm: 'inherit', md: 'none'}}>

        <Slider {...settings}>

          {articles && articles.map((item, idx) => (

            <Card key={idx} sx={{ maxWidth: 899, height: 500}}>

              <Image src={item.image} alt="Player" quality={100} width={width} height={500} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

            </Card>

          ))}

        </Slider>

      </Box>

      <Box display={{ xs: 'none', sm: 'none', md: 'inherit'}}>

        <Slider {...settings}>

        {articles && articles.map((item, idx) => (

          <Card key={idx} sx={{ maxWidth: 1260, height: 600}}>

            <Image src={item.image} alt="Player" quality={100} width={width > 1260?1260:width} height={600} style={{ objectFit: 'cover', objectPosition: "center 25%"}}/>

          </Card>

        ))}

        </Slider>

      </Box>

    </Box>


      

  );
}

export default HeadlineCarousel;