"use client"

import { Box } from "@mui/material";

import Slider from "react-slick";
import Slide from "./MainNewsSlide/Slide";

import fromDataToArticleType from "@/lib/ArticlesUtilities/CreateArticleTypeStructure/ArticleTypeStructure";

import { useEffect, useState } from "react";
import qs from 'qs'


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

    <Box className="slider-container" >

      <Box display={{ xs: 'inherit', sm: 'none'}}>

        <Slider {...settings}>

          {articles && articles.filter(headline => headline.headline === true).map((item, idx) => (

            <Slide key={idx}  mainnews={item} />

          ))}


        </Slider>

      </Box>

      <Box display={{ xs: 'none', sm: 'inherit', md: 'none'}}>

        <Slider {...settings}>

          {articles && articles.filter(headline => headline.headline === true).map((item, idx) => (

            <Slide key={idx}  mainnews={item} />

          ))}

        </Slider>

      </Box>

      <Box display={{ xs: 'none', sm: 'none', md: 'inherit'}}>

        <Slider {...settings}>

        {articles && articles.filter(headline => headline.headline === true).map((item, idx) => (

          <Slide key={idx}  mainnews={item} />

        ))}

        </Slider>

      </Box>

    </Box>

  );
}

export default HeadlineCarousel;