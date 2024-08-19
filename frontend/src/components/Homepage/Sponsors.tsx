import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography } from "@mui/material";

import CCCULLOGO from '@/components/Homepage/Official Partners Logos/CCCULLogo'


const Sponsors = () => {


  return (
    <Box marginTop={4}>

      <Box textAlign='center'>
        <Typography>
          OFFICIAL CLUB PARTNERS
        </Typography>
      </Box>


      <Stack>

        <Box>
          <CCCULLOGO width={200} height={200} />
        </Box>

      </Stack>
    </Box>
  );
}

export default Sponsors;