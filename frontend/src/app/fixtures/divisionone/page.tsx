

import React, { useState, useEffect, Suspense } from 'react'
import {Box, Stack, Paper, Typography, ToggleButton, ToggleButtonGroup} from '@mui/material'

import Fixtures from '@/components/Fixtures/Fixtures';
import Footer from '@/components/Homepage/Footer';
import Sponsors from '@/components/Homepage/Sponsors';



const page = async () => {


  
  
  return (
    
    <Box maxWidth='1280px' margin='auto'>
      
      <Box>

        <Box >
          <img src='/team/FULLSQUAD.png' alt='Team Picture' width='100%' style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: "50% 50%"}}/> 
        </Box>

      </Box>

      <Box display='flex' justifyContent='center' marginTop={2}>

        <Suspense fallback={<div>Loading...</div>}>
          <Fixtures league='Division One'/>
        </Suspense>


      </Box>

      <Sponsors />

      <Footer />



    </Box>
  );
}

export default page;