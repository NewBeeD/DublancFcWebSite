'use client'

import React, { useState, useEffect } from 'react'
import {Box, Stack, Paper, Typography, ToggleButton, ToggleButtonGroup} from '@mui/material'

import FixtureDisplay from '@/lib/fixtures/FixtureDisplay'
import { FixtureType } from '@/lib/fixtures/FixtureDisplay'





const Fixtures = ({ league }: { league: string }) => {


  // const response = await fetch(`https://dfcrestapi.onrender.com/api/fixtures`)
  // let fixtures = await response.json()
  // let game_fixtures: FixtureType[] = FixtureDisplay(fixtures.data)

  const [fixtures, setFixtures]  = useState<FixtureType[]>([])
  const [category, setCategory] = useState('fixtures')
  const [completed, setCompleted] = useState(false)


  useEffect(()=>{

    fetch(`https://dfcrestapi.onrender.com/api/fixtures`)
      .then((res) => res.json())
      .then((data) => {      

        let final_data: FixtureType[] = FixtureDisplay(data.data)
        final_data = final_data.filter(point => point.league === league)
        setFixtures(final_data)
      })
      .catch((error) =>{

        throw new Error(error)
      })    
  }, [])

  const handleChange = (event: React.MouseEvent<HTMLElement>, fixtureCategory: string) => {

    setCategory(fixtureCategory)

    switch(fixtureCategory){

      case 'fixtures':
        setCompleted(false)
        break;
      
      case 'results':
        setCompleted(true)
    }
  }

  
  
  return (
    
    <Box maxWidth='1280px' margin='auto'>
  
      <Stack justifyContent='center' marginTop={8}>

        <Box>
          
          <ToggleButtonGroup
          value={category}   
          exclusive
          onChange={handleChange}      
          >

            <ToggleButton value='fixtures'>
              Fixtures
            </ToggleButton>

            <ToggleButton value='results'>
              Results
            </ToggleButton>

          </ToggleButtonGroup>
        </Box>

        <Box marginTop={{xs: 4, sm:10}}>
          {fixtures && fixtures.filter(fixture_complete => fixture_complete.complete === completed).map((item, idx)=>{

            return(

              <Paper sx={{ height: 'auto', width: {xs: 340, sm: 600}, marginBottom: {xs:4, sm:10}, paddingY: {xs: 2}, backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                
                <Stack direction='column'>

                  <Stack direction='column' textAlign='center' paddingTop={2}>

                    <Box>
                      <Typography>{item.league}</Typography>
                    </Box>

                    <Box>
                      <Box>{item.match_date[0]}</Box>
                      <Box>{item.venue}</Box>
                    </Box>
                    
                  </Stack>

                  <Box>

                    <Stack direction='row' spacing={{xs: 1}} justifyContent='center' paddingTop={4}>

                      <Box>
                        <Typography fontWeight={900} paddingLeft={{xs: 1}}>
                          {item.complete === false? item.home_team: `${item.home_team} ${item.home_team_score}`}
                        </Typography>
                      </Box>

                      <Box><Typography>{item.complete === false?item.match_date[1]: '-'}</Typography></Box>

                      <Box><Typography fontWeight={900}>{item.complete === false? item.away_team: `${item.away_team_score} ${item.away_team}`}</Typography></Box>

                    </Stack>
                  </Box>



                </Stack>
              </Paper>

            )
          })}
        </Box>


      </Stack>



    </Box>
  );
}

export default Fixtures;