"use client"

import {Box, Stack, Typography, Divider} from '@mui/material'
import { useEffect, useState } from "react";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Footer from "@/components/Homepage/Footer";
import SocialShare from '@/components/ReactShare/SocialShare';

import timeAgo from '@/util/DateTimeToHoursElapsed';
import formatDateTime from '@/util/DateTimeConversion';

import Image from 'next/image';





const page = ({ params }) => {

  const id = params.id
  const [article, setArticle] = useState<BlocksContent>([])
  const [author, setAuthor] = useState()
  const [time, setTime] = useState()
  const [category, setCategory] = useState()


  const fullUrl = typeof window !== 'undefined' ? window.location.href : '';
  const ShareTitle = 'Dublanc Football Club'

  // let elapsedTime = time ? timeAgo(time): '';
  let elapsedTime = time ? formatDateTime(time): '';



  useEffect(()=>{
          

    fetch(`https://dfcrestapi.onrender.com/api/articles/${id}`)
    .then((res) => res.json())
    .then((data) => { 

      console.log(data);
      
      
      // let article_content: BlocksContent = data.data.attributes.content
      setArticle(data.data.attributes.content)
      setAuthor(data.data.attributes.author)
      setTime(data.data.attributes.publishedAt)
      setCategory(data.data.attributes.category)

    })
    .catch((error) =>{

      throw new Error(error)
    })      
  
}, [])


  
  return (

    <Box display='flex' justifyContent='center'>

      <Box  width={{xs: '100%'}} maxWidth='1280px'>

        <Box paddingX={{xs: 2}} >

          <BlocksRenderer content={article}  blocks={{
            image: ({image}) => {

              return(

                <Box maxWidth={{xs: 400}} paddingBottom={3}>
                  <Image 
                  src={image.url} 
                  alt='Article Image' 
                  height={image.height} 
                  width={image.width} 
                  layout='responsive'
                  style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

                </Box>
              )
              
            },
            heading: ({children, level}) =>{

              switch(level){

                case 1:
                  return <Typography variant='h2' textAlign='center' paddingTop={2} paddingBottom={2}>{children}</Typography>
              }
            }, 
            paragraph: ({ children }) => {
              return(
                <Typography align='left'>
                  {children}
                </Typography>
              )
            }
          }}/>

          <SocialShare url={fullUrl} title={ShareTitle} />

          <Divider />

          <Box paddingY={2}>

            <Stack direction='column'>

              <Box>
                <Typography color='blue' fontWeight={900} variant='caption'>
                  {category && category}
                </Typography>
              </Box>

              <Box>
                <Typography color='blue' fontWeight={900} variant='caption'>
                  {author && author}
                </Typography>
              </Box>

              <Box>
                <Typography fontWeight={900} variant='caption'>
                  {elapsedTime && elapsedTime}
                </Typography>
              </Box>

              

            </Stack>

          </Box>

        </Box>

        <Footer />     

      </Box>
    </Box>
  );
}

export default page;