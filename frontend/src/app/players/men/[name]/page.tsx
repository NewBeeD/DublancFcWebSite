
import {Box, Stack, Typography, Divider} from '@mui/material'
import PlayerStructure from '@/lib/Player/PlayerStructure'
import Footer from '@/components/Homepage/Footer'
import Sponsors from '@/components/Homepage/Sponsors'

import qs from 'qs'

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
      pageSize: 30
    }
  }
}

const query_params_player = qs.stringify(params_articles)

const page = async ({ params }) => {

  const name = params.name
  const [firstName, lastName] = name.split('-');


  const response = await fetch(`https://dfcrestapi.onrender.com/api/players?${query_params_player}`)
  let players = await response.json()
  let squad =  PlayerStructure(players.data)
  let player: PlayerType[] = squad.filter(playerPoint => playerPoint.firstname === firstName && playerPoint.lastname === lastName ) 

  
  return (

    <Box maxWidth='1280px' margin='auto'>

      <Box >

        {player && player.map((item, idx) => {

          return(

            <Box paddingTop={1} margin='auto'>

              <Stack direction='column'>
                {/* Info  */}
                <Stack direction={{xs: 'column-reverse',sm:'row'}} paddingX={2}>

                  <Box width={{ sm: 400}} paddingLeft={4} >
                    {/* Name and Player Info */}
                    <Stack direction='column'>

                      <Box paddingTop={4}>
                        <Typography variant='h2' fontWeight={900}>{item.firstname}</Typography>
                        <Typography variant='h2' fontWeight={900}>{item.lastname}</Typography>
                      </Box>

                      <Box 
                      sx={{
                        width: '100%',
                        background: 'linear-gradient(to right, rgba(0, 0, 255, 0), rgba(0, 0, 255, 0.1), rgba(255, 0, 255, 0))',
                        }}
                        paddingY={4}>

                        <Stack direction='row' flexWrap='wrap' spacing={4} paddingLeft={1} paddingTop={2}>

                          <Stack direction='column'>
                            <Box color='grey'><Typography>Date Of Birth</Typography></Box>
                            <Box><Typography fontWeight={900}>{item.birth_date}</Typography></Box>
                          </Stack>

                          <Stack direction='column'>
                            <Box color='grey'><Typography>Position</Typography></Box>
                            <Box><Typography fontWeight={900}>{item.position}</Typography></Box>
                          </Stack>

                          <Stack direction='column'>
                            <Box color='grey'><Typography>Foot</Typography></Box>
                            <Box><Typography fontWeight={900}>{item.foot}</Typography></Box>
                          </Stack>

                        </Stack>

                        <Stack direction='row' flexWrap='wrap' spacing={4} paddingLeft={1} paddingTop={2}>

                          <Stack direction='column'>
                            <Box color='grey'><Typography>Jersey Number</Typography></Box>
                            <Box ><Typography fontWeight={900}>{item.kit}</Typography></Box>
                          </Stack>

                          <Stack direction='column'>
                            <Box color='grey'><Typography>Height</Typography></Box>
                            <Box ><Typography fontWeight={900}>{item.height}cm</Typography></Box>
                          </Stack>

                          <Stack direction='column'>
                            <Box color='grey'><Typography>Weight</Typography></Box>
                            <Box ><Typography fontWeight={900}>{item.weight}</Typography></Box>
                          </Stack>

                        </Stack>

                      </Box>

                    </Stack>

                  </Box>

                  {/* Image */}
                  <Box width={{ sm: 800}} paddingY={2}  >

                    <Box >
                      <img src={item.image} alt='player image' width='100%' height={400} style={{ objectFit: 'cover', objectPosition: "50% 50%"}}/>
                    </Box>

                  </Box>

                </Stack>

                <Box paddingX={4} paddingY={4}>
                  <Typography>
                  {item.player_bio}
                  </Typography>
                </Box>

              </Stack>  

              


            </Box>
          )
        })}

      </Box>

      <Sponsors />

      <Footer />


    </Box>
  );
}

export default page;