"use client"

import { Box, Stack} from '@mui/material'

import { useState, useEffect } from 'react';
import qs from 'qs'

import fromDataToMerchandiseType from '@/lib/GalleryUtilities/GalleryTypeStructure';


interface GalleryType{

  title: string,
  images: object[],
  description?: string
}

interface ImagesType {

  name: string,
  url: string

}

const getRandomNumber = (array): number => {

  const min = 1; // Start from 1 (since arrays are typically 1-indexed conceptually)
  const max = array.length; // The total number of objects in the array

  return Math.floor(Math.random() * (max - min + 1)) + min;
};





const BgImage = ({ page, randomInt }) => {

  const [background, setBackground] = useState<ImagesType[]>([])
  const [image, setImage] = useState(1)
  console.log('mage number', image);
  
  
  
  useEffect(()=>{
      
    const params_media = {

      populate: {
        images: {
          populate: true
        }
      }
    }

    const query_params_media = qs.stringify(params_media)

    fetch(`https://dfcrestapi.onrender.com/api/galleries?${query_params_media}`)
    .then((res) => res.json())
    .then((data) => {      

      let final_data: GalleryType[] = fromDataToMerchandiseType(data.data)
      let images: GalleryType[] = final_data.filter(item => item.title === 'background')
  
      setImage(getRandomNumber(images[0].images))       
      setBackground(images[0].images)
    })
    .catch((error) =>{

      throw new Error(error)
    })      
  
  }, [])
  
  return (

    <Box width='100%'  sx={{ backgroundColor: '#333635'}}>

      {background.length > 0 ? (

        <Box className="image-container">

          <img className='background-image' src={background[image].url} width='100%' height='300px' />

          <Box className="overlay"></Box>

        </Box>

      ): ''}

    </Box>
  );
}

export default BgImage;