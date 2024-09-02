import { Box, Stack, Paper, Card, CardMedia, CardContent, Typography, Divider } from "@mui/material";

import GalleryStructure from "@/lib/Gallery/GalleryStructure";
import { GalleryType } from "@/lib/Gallery/GalleryStructure";

import qs from 'qs'
import Footer from "@/components/Homepage/Footer";
import Sponsors from "@/components/Homepage/Sponsors";


const params_gallery = {

  populate: {
    images: {
      populate: true
    }, 
    pagination: {
      pageSize: 100
    }
  }
}

const query_params_gallery = qs.stringify(params_gallery)



const page = async ({ params }) => {

  const id = decodeURIComponent(params.images)  

  const response = await fetch(`https://dfcrestapi.onrender.com/api/galleries?${query_params_gallery}`)
  let gallery = await response.json()
  let gallery_images: GalleryType[] = GalleryStructure(gallery.data)
  gallery_images = gallery_images.filter(item => item.title === id)

  const gallery_title: string = gallery_images[0].title?? ''



  return (
    <Box maxWidth='1280px'>

      <Box paddingY={4}>

        <Typography textAlign='center' variant="h3">
          {gallery_title && gallery_title}
        </Typography>

        <Divider />

      </Box>

    
      <Box display='flex' flexWrap='wrap' justifyContent='center' paddingBottom={6}>
        
        {gallery_images && gallery_images[0].images.map((item, idx) => {

          return(

            <Paper sx={{ width: {xs: '95%',sm:'300px'}, margin: 2}}>

              <img src={item.url} width='100%' height='100%' style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

              

            </Paper>        

          )
        })}
      </Box>

      <Sponsors />
      <Footer />

    </Box>
  );
}

export default page;