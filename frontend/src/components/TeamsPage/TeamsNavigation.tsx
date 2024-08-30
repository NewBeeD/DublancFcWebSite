'use client'

import { Box, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const TeamsNavigation = () => {


  const router = useRouter()
  const [team, setTeam] = useState('Premier League')

  const handleChange = (event: React.MouseEvent<HTMLElement>, fixtureCategory: string) => {

    setTeam(fixtureCategory)

    switch(fixtureCategory){

      case 'Premier League':
        router.push('/players/men')
        break;

      case 'Division One':
        router.push('/players/divisionone')
        break;


      case 'Under 21':
        router.push('/players/under21')
        break;

      case 'Women':
        router.push('/players/women')
        break;

      case 'Academy':
        router.push('/players/academy')
        break;

    }
  }
  
  
  return (
    <Box >

      <ToggleButtonGroup
      value={team}   
      exclusive
      onChange={handleChange}
      size="small"
      sx={{ display: {xs: 'none', sm: 'inherit'}}}
      >

        <ToggleButton value='Premier League' sx={{ fontSize: {xs: '12px', sm: '15px'}, border: '1px solid white'}}>
          <Typography color='white' >Premier League</Typography>          
        </ToggleButton>

        <ToggleButton  value='Division One' sx={{ fontSize: {xs: '12px', sm: '15px'}, border: '1px solid white'}}>
          <Typography color='white' >Division One</Typography>           
        </ToggleButton>

        <ToggleButton  value='Under 21' sx={{ fontSize: {xs: '12px', sm: '15px'}, border: '1px solid white'}}>
          <Typography color='white' >Under 21 </Typography>         
        </ToggleButton>

        <ToggleButton  value='Women' sx={{ fontSize: {xs: '12px', sm: '15px'}, border: '1px solid white'}}>
          <Typography color='white' >Women</Typography>             
        </ToggleButton>

        <ToggleButton  value='Academy' sx={{ fontSize: {xs: '12px', sm: '15px'}, border: '1px solid white'}}>
          <Typography color='white' >Academy</Typography>      
        </ToggleButton>


      </ToggleButtonGroup>
      
      
    </Box>
  );
}

export default TeamsNavigation;