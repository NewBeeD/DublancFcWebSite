import qs from 'qs'
import { Box, Paper, Card, CardContent, CardMedia ,Stack, Typography } from '@mui/material'

import Footer from '@/components/Homepage/Footer'

import PlayerStructure from '@/lib/Player/PlayerStructure'

interface PlayerType{

  firstname: string,
  lastname: string,
  birth_date: string,
  position: string,
  gender: string,
  league: string,
  foot?: string,
  kit?: number,
  height?: number,
  weight?: number,
  image: string,
  player_bio?: string,
  stats?: object,
}


const params_articles = {

  populate: {
    image: {
      populate: true
    }, 
    pagination: {
      pageSize: 100
    }
  }
}

const query_params_player = qs.stringify(params_articles)

const page = async () => {

  const response = await fetch(`https://dfcrestapi.onrender.com/api/players?${query_params_player}`)
  let players = await response.json()
  let squad =  PlayerStructure(players.data) 
  squad = squad.filter(playerPoint => playerPoint.league === 'ACADEMY') 
  

  return (
    <Box margin='auto' maxWidth={1280}>

      {players && (

        <Box display='flex' justifyContent='center' width='100%'  flexWrap='wrap' paddingTop={4}>
          
          {squad.filter(playerPoint => playerPoint.league === 'ACADEMY').map((item, idx) => (

            <Box key={idx} width={350} height={400} margin={{xs: 0.5, sm: 2}} position='relative'>

              <Box>

                <Card>

                  <CardMedia component='img' image={item.image} style={{ objectFit: 'cover', objectPosition: "50% 50%"}} sx={{ height: {xs: 300}, width: '100%'}}/>

                </Card>

              </Box>

              <Box>

                <Stack direction='column' paddingLeft={1} paddingTop={1}>

                  <Box>
                    <Typography variant='body1' fontWeight={900}>{item.firstname} {item.lastname}</Typography>
                  </Box>

                  <Box>
                    <Typography variant='body2' >{item.position}</Typography>
                  </Box>

                </Stack>

              </Box>

              <Box position='absolute' top={6} left={15}>
                <Typography variant='h4' fontWeight={900} color='#1142b1'>{item.kit}</Typography>
              </Box>



            </Box>
          ))}

        </Box>

      )}

      <Footer />

    </Box>
  );
}

export default page;