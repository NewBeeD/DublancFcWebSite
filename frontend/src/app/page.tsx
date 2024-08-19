
import { Box } from "@mui/material";

import HeadlineCarousel from '../components/Homepage/ArticleCarousel'
import NewsCarousel from '@/components/Homepage/NewsCarousel'
import MerchandiseSection from "@/components/Homepage/MerchandiseSection";
import Gallery from '@/components/Homepage/Gallery'
import Sponsors from "@/components/Homepage/Sponsors";
import Video from '@/components/Homepage/Video'
import Footer from "@/components/Homepage/Footer";

import { Suspense } from "react";



export default function Home(){

  
  return (

    <Box minWidth= {{sm: 600 ,md: 899, lg: 1200}} maxWidth={{sm: 899 ,md: 1199, lg: 1280}} height={{sm: 500, md: 600}} sx={{margin: 'auto'}} >

      <Suspense fallback={<div>Loading...</div>}>
        <HeadlineCarousel />   
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Video page='Homepage1' />
      </Suspense> 

      <Suspense fallback={<div>Loading...</div>}>
        <NewsCarousel />
      </Suspense>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <MerchandiseSection />
      </Suspense> 

      <Suspense fallback={<div>Loading...</div>}>
        <Gallery />
      </Suspense>  

      <Sponsors /> */}

      <Footer />
    
    </Box>
  )
  
}




