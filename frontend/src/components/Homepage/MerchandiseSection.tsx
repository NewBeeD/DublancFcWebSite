"use client"

import { Box, Stack, Paper, Card, CardContent, CardActions, CardMedia, Button, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from '@mui/lab';


import Image from "next/image";
import Slider from "react-slick";
import useScreenSize from "@/util/windowDimension";

import { useEffect, useState } from "react";
import qs from 'qs'

import fromDataToMerchandiseType from "@/lib/MerchandiseUtilities/MerchandiseTypeStructure";



interface Merchandise{

  name: string,
  price: number,
  stock: number,
  image: object[],
  category: string,
  description?: string, 
  color?: string,
  product_details?: string,
  care?: string,
}

interface singleImage{

  name: string,
  url: string
}



const MerchandiseSection = () => {

  const [value, setValue] = useState<string>('1')
  const [merch, setMerch] = useState<Merchandise[]>([])
  const { width, height } = useScreenSize() 

  const dummyData = [1, 2, 3, 4, 5, 6, 7]

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: false, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 800,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };



  useEffect(()=>{
      
    const params_jerseys = {

      populate: {
        image: {
          populate: true
        }
      }
    }

    const query_params_jerseys = qs.stringify(params_jerseys)

    fetch(`https://dfcrestapi.onrender.com/api/jerseys?${query_params_jerseys}`)
    .then((res) => res.json())
    .then((data) => {      

      const final_data: Merchandise[] = fromDataToMerchandiseType(data.data)     
      setMerch(final_data)
    })
    .catch((error) =>{

      throw new Error(error)
    })      
  
  }, [])

  
  
  return (
    
    <Box marginTop={4}>

      <Box paddingLeft={2} width={130} margin='auto'>

        <Typography variant="h5" fontWeight={900}>
          Store
        </Typography>

      </Box>

      <Box paddingTop={1} >

        <TabContext value={value}>

          <Box >

            <Box display='flex' justifyContent={{xs: 'center'}}>
              <TabList onChange={handleChange} >
                <Tab label="Male" value="1" />
                <Tab label="Female" value="2" />
                <Tab label="Children" value="3" />
              </TabList>
            </Box>

          </Box>


          <TabPanel value="1" >


            {merch && merch.filter(cat => cat.category === 'Male Jersey').map((item, idx) => (

              <Box >

                <Slider {...settings}>

                  {item.image.map((img, index) => (

                    <Card key={index} sx={{ maxWidth: 300, height: 380}}>

                      <Image  src={img.url} alt={img.name} width={300} height={300} style={{ objectFit: 'cover'}}/>

                      <CardContent>

                        <Typography>
                          {item.name}
                        </Typography>

                        <Typography>
                          ${item.price}
                        </Typography>
                          
                       </CardContent>

                    </Card>
                  ))}

                </Slider>


              </Box>
            ))}

          </TabPanel>

          <TabPanel value="2">

            <Box >

              {merch && merch.filter(cat => cat.category === 'Female Jersey').map((item, idx) => (

                <Box >

                <Slider {...settings}>

                  {item.image.map((img, index) => (

                    <Card key={index} sx={{ maxWidth: 300, height: 380}}>

                      <Image  src={img.url} alt={img.name} width={300} height={300} style={{ objectFit: 'cover'}}/>

                      <CardContent>

                        <Typography>
                          {item.name}
                        </Typography>

                        <Typography>
                          ${item.price}
                        </Typography>
                          
                      </CardContent>

                    </Card>
                  ))}

                </Slider>

                </Box>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value="3">

            <Box >

              {merch && merch.filter(cat => cat.category === 'Children Jersey').map((item, idx) => (

                <Box key={idx}>

                <Slider {...settings}>

                  {item.image.map((img, index) => (

                    <Card key={index} sx={{ maxWidth: 300, height: 380}}>

                      <Image  src={img.url} alt={img.name} width={300} height={300} style={{ objectFit: 'cover'}}/>

                      <CardContent>

                        <Typography>
                          {item.name}
                        </Typography>

                        <Typography>
                          ${item.price}
                        </Typography>
                          
                      </CardContent>

                    </Card>
                  ))}

                </Slider>


                </Box>
              ))}
            </Box>

          </TabPanel>

          </TabContext>

      </Box>

      
    </Box>
  );
}

export default MerchandiseSection;