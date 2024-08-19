import { Box, Stack, Typography } from "@mui/material";

import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';



const Footer = () => {

  const currentYear = new Date().getFullYear();
  
  
  return (
    
    <Box component='footer' paddingTop={4} sx={{ backgroundColor: 'black', margin: 'auto'}} paddingX={{xs:1}} minWidth= {{sm: 600 ,md: 899, lg: 1200}} maxWidth={{sm: 899 ,md: 1199, lg: 1270}} >

      <Stack direction='row' spacing={{xs:10}}>

        <Stack>

          <Typography color='white' variant="caption">Almond Park</Typography>
          <Typography color='white' variant="caption">Dublanc</Typography>
          <Typography color='white' variant="caption">St. Peters</Typography>
          <Typography color='white' variant="caption">Common-Wealth of Dominica</Typography>

        </Stack>


        <Stack>

          <Typography color='white'>Follow Us</Typography>

          <Stack direction='row'>

            <IconButton><FacebookIcon sx={{ color: 'white'}} /></IconButton>
            <IconButton><InstagramIcon sx={{ color: 'white'}} /></IconButton>
            <IconButton><YouTubeIcon sx={{ color: 'white'}} /></IconButton>

            
          </Stack>

        </Stack>

      </Stack>

      <Box className="footer" marginTop={2}>
        <Box className="bouncing-name">DUBLANC FOOTBALL CLUB</Box>
      </Box>

      <Box textAlign='center' paddingTop={2}>
        <Typography color='white' fontSize='9px'>
          &copy; {currentYear} Danphil Daniel. All rights reserved.
        </Typography>
      </Box>

    </Box>
  );
}

export default Footer;