import { Box } from "@mui/material";
import Link from "next/link";



import HeadlineCarousel from '../components/Homepage/HeadlineCarousel'

export default function Home(){
  return (

    <Box sx={{margin: 'auto', width: {sm: 700 ,md: 900, lg: 1260}}}>  
      
      <HeadlineCarousel width={500} height={300} />   
    
    </Box>
  )
  
}

