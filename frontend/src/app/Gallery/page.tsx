import { Box, Stack, Paper, Card, CardMedia, CardContent, Typography } from "@mui/material";

import GalleryStructure from "@/lib/Gallery/GalleryStructure";
import { GalleryType } from "@/lib/Gallery/GalleryStructure";

import qs from 'qs'
import Link from "next/link";


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



const page = async () => {


  const response = await fetch(`https://dfcrestapi.onrender.com/api/galleries?${query_params_gallery}`)
  let gallery = await response.json()
  let images: GalleryType[] = GalleryStructure(gallery.data)



  return (
    <Box>

      <Box paddingTop={4} paddingBottom={8}>

        <Typography variant="h3" textAlign='center'>
          GALLERY
        </Typography>

      </Box>

      <Box display='flex' flexWrap='wrap' justifyContent='center'>

        {images && images.map((item, idx) => {

          return (

            <Box width={300} margin={1}>

              <Link href={`/Gallery/${item.title}`} style={{ textDecoration: 'none'}}>
              
                <Card>

                  <CardMedia component='img' src={item.cardImage} width='100%' height='300px' style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

                  <CardContent>
                    <Typography fontWeight={900}>{item.title}</Typography>
                  </CardContent>
                  
                </Card>
              
              </Link>


            </Box>

          )
        })}


      </Box>

      
    </Box>
  );
}

export default page;