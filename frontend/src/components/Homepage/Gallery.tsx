"use client"

import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography, Tab } from "@mui/material";

import qs from 'qs'
import { useState, useEffect } from "react";

import fromDataToGalleryType from '@/lib/GalleryUtilities/GalleryTypeStructure'
import useScreenSize from "@/util/windowDimension";
import Image from "next/image";

import Slider from "react-slick";


interface GalleryType{

  title: string,
  images: object[],
  description?: string
}



const Gallery = () => {

  const [gallery, setGallery] = useState<GalleryType[]>([])
  const {width, height} = useScreenSize()

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
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  }


  useEffect(()=>{
      
    const params_media = {

      populate: {
        images: {
          populate: true
        }
      }
    }

    const query_params_media = qs.stringify(params_media)

    fetch(`https://dublancfc-api.onrender.com/api/galleries?${query_params_media}`)
    .then((res) => res.json())
    .then((data) => {      

      const final_data: GalleryType[] = fromDataToGalleryType(data.data)            
      setGallery(final_data)
    })
    .catch((error) =>{

      throw new Error(error)
    })      
  
  }, [])
  
  
  return (
    <Box position='relative'>

      <Box position={{xs:'absolute', sm: 'inherit'}} top={{xs: 1, sm: 0}} zIndex={{xs: 500, sm: 0}}>
        <Typography variant="h2" gutterBottom={false} sx={{ fontWeight: 900}}>
          Gallery
        </Typography>
      </Box>

      <Box position={{xs:'relative', sm: 'inherit'}} zIndex={{xs: 100, sm: 0}} top={{xs:62, sm:0}}>

        {gallery && gallery.map((item, idx) => (

          <Box>

            <Slider {...settings}>

              {item.images.map((image, id) => (

                <Card>
                  <Image alt="galleryImage" src={image.url} width={300} height={300} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>
                </Card>
              ))}
              
            </Slider>

          </Box>

        ))}

      </Box>
      
    </Box>
  );
}

export default Gallery;