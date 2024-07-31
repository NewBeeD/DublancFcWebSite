
import { Box } from "@mui/material";

import HeadlineCarousel from '../components/Homepage/ArticleCarousel'
import NewsCarousel from '@/components/Homepage/NewsCarousel'

import { Suspense } from "react";



export default function Home(){

  
  return (

    <Box minWidth= {{sm: 600 ,md: 899, lg: 1200}} maxWidth={{sm: 899 ,md: 1199, lg: 1260}} height={{sm: 500, md: 600}} sx={{margin: 'auto'}}>

      <Suspense fallback={<div>Loading...</div>}>
        <HeadlineCarousel />   
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <NewsCarousel />
      </Suspense>     
    
    </Box>
  )
  
}




