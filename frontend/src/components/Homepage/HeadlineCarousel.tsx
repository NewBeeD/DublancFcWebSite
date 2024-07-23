"use client"

import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";


interface Dimension {

  width: number,
  height: number
}






const HeadlineCarousel = ({width, height}: Dimension) => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true, 
    arrows: false
  };
  
  
  return (

    <Box className="slider-container">

      <Slider {...settings}>

        <Card>
          {/* <CardMedia component='img' alt="player" height='auto' image="/Players/IMG_5955.jpg" sx={{ objectFit: 'cover'}}/> */}

          <Image src="/Players/IMG_5955.jpg" alt="Player" quality={100} width={width} height={height} style={{ objectFit: 'cover'}}/>

        </Card>

        <Card>
          {/* <CardMedia component='img' alt="player" height='auto' image="/Players/IMG_5955.jpg" sx={{ objectFit: 'cover'}}/> */}

          <Image src="/Players/IMG_5959.jpg" alt="Player" quality={100} width={width} height={height} style={{ objectFit: 'cover'}}/>

        </Card>

        <Card>
          {/* <CardMedia component='img' alt="player" height='auto' image="/Players/IMG_5955.jpg" sx={{ objectFit: 'cover'}}/> */}

          <Image src="/Players/IMG_5961.jpg" alt="Player" quality={100} width={width} height={height} style={{ objectFit: 'cover'}}/>

        </Card>

        

      
      </Slider>

    </Box>


      

  );
}

export default HeadlineCarousel;