import {  Box, Typography, Stack, Button, Skeleton, Card } from '@mui/material'
import Image from 'next/image';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import useScreenSize from "@/util/windowDimension";

interface MainNewsType {

  mainnews: {

    author: string,
    category: string,
    created: string,
    headline: boolean,
    image: string,
    video: string | null,
    content: object[]
  }
}

const Slide = ({ mainnews }: MainNewsType) => {

  console.log(mainnews);
  


  const { width, height } = useScreenSize() 
  
  
  return (
    
    <Box position='relative'>

      <Box display={{ xs: 'inherit', sm: 'none'}}>
        
        <Card sx={{ maxWidth: 600, height: 600, zIndex: 10, borderRadius: 0}} className='headline-image-container'>

          <Image src={ mainnews.image} alt="Player" quality={100} width={width} height={600} style={{ objectFit: 'cover', objectPosition: "50% 50%"}} className='headline-background-image'/>

          <Box className='headline-overlay'></Box>

        </Card>

        <Stack direction='column' spacing={3} position='absolute' zIndex={30} bottom={{xs:30}} left={{ xs: 20}}>

          <Stack direction={{xs:'column', sm: 'row'}} alignItems={{xs: 'left',sm:'center'}}>
            <Typography color='#13f01e' fontWeight={900} fontSize={16}>
              { mainnews.category}.
            </Typography>

            <Typography color='white' fontSize={16} fontWeight={900}>
              { mainnews.title}
            </Typography>

          </Stack>

        <Stack direction='row' spacing={2}>

          {mainnews.category === 'MERCHANDISE'? (

            <Button variant='contained' sx={{ borderRadius: 50, backgroundColor: '#13f01e', color: 'black'}} endIcon={<ArrowRightIcon />}>Shop Now</Button>

          ): ''}

          <Button variant='contained' sx={{ borderRadius: 50, backgroundColor: '#13f01e', color: 'black'}} endIcon={<ArrowRightIcon />}>Read</Button>
        </Stack>


        </Stack>

        
      </Box>

      <Box display={{ xs: 'none', sm: 'inherit', md: 'none'}}>

        <Card  sx={{ maxWidth: 899, height: 500, borderRadius: 0}}>

          <Image src={ mainnews.image} alt="Player" quality={100} width={width} height={500} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>

        </Card>

        <Stack direction='column' spacing={2} position='absolute' zIndex={30} bottom={{xs:30}} left={{ xs: 20}}>

          <Stack direction='row' alignItems='center'>
            <Typography color='#13f01e' fontWeight={900} fontSize={16}>
              { mainnews.category}.
            </Typography>

            <Typography color='white' fontSize={16} fontWeight={900}>
              { mainnews.title}
            </Typography>

          </Stack>

          <Stack direction='row' spacing={2}>

            {mainnews.category === 'MERCHANDISE'? (

              <Button variant='contained' sx={{ borderRadius: 50, backgroundColor: '#13f01e', color: 'black'}} endIcon={<ArrowRightIcon />}>Shop Now</Button>

            ): ''}

            <Button variant='contained' sx={{ borderRadius: 50, backgroundColor: '#13f01e', color: 'black'}} endIcon={<ArrowRightIcon />}>Read</Button>
        </Stack>


        </Stack>


      </Box>

      <Box display={{ xs: 'none', sm: 'none', md: 'inherit'}}>

        <Card sx={{ maxWidth: 1280, height: 600, borderRadius: 0}}>

          <Image src={ mainnews.image} alt="Player" quality={100} width={width > 1260?1260:width} height={600} style={{ objectFit: 'cover', objectPosition: "center 25%"}}/>

        </Card>

        <Stack direction='column' spacing={2} position='absolute' zIndex={30} bottom={{xs:30}} left={{ xs: 20}}>

          <Stack direction='row' alignItems='center'>
            <Typography color='#13f01e' fontWeight={900} fontSize={16}>
              { mainnews.category}.
            </Typography>

            <Typography color='white' fontSize={16} fontWeight={900}>
              { mainnews.title}
            </Typography>

          </Stack>

          <Stack direction='row' spacing={2}>

            {mainnews.category === 'MERCHANDISE'? (

              <Button variant='contained' sx={{ borderRadius: 50, backgroundColor: '#13f01e', color: 'black'}} endIcon={<ArrowRightIcon />}>Shop Now</Button>

            ): ''}

            <Button variant='contained' sx={{ borderRadius: 50, backgroundColor: '#13f01e', color: 'black'}} endIcon={<ArrowRightIcon />}>Read</Button>
          </Stack>


        </Stack>

      </Box>


    </Box>
  );
}

export default Slide;