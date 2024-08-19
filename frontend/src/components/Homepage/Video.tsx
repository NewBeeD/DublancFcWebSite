"use client"

import { Box, Stack, Button, Typography} from "@mui/material";
import YouTube from "react-youtube";
import useScreenSize from "@/util/windowDimension";
import { useEffect, useState } from "react";

import VideoTypeDisplay from "@/lib/video/videoSetup";

interface VideoType {

  link: string,
  category: string
}

interface Page{

  page: string
}



const MerchandiseSection = ({ page }: Page) => {

  const [video, setVideo] = useState<VideoType[]>([])

  const opts = {
    width: '100%',
    borderRadius: '1rem',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      controls: 0, // Disable controls
      autoplay: 0, // Auto-play the video
      modestbranding: 1, // Hide the YouTube logo
      rel: 0, // Disable related videos at the end

    },
  }
  


  useEffect(()=>{
      

    fetch(`https://dfcrestapi.onrender.com/api/videos`)
    .then((res) => res.json())
    .then((data) => {  
      
      const final_data: VideoType[] = VideoTypeDisplay(data.data)
      setVideo(final_data)
    })
    .catch((error) =>{

      throw new Error(error)
    })      
  
  }, [])

  
  
  return (

    <Box paddingY={{xs: 4, sm: 8}} paddingBottom={0}>

      <Box  margin='auto' width={{xs: '90%', sm: '80%'}}>

        {video && video.map((item, idx) => (
          <Box key={idx}>

            <YouTube 
            videoId={item.link}
            opts={opts}
            />


          </Box>
        ))}
        
        

      </Box>

    </Box>

  );
}

export default MerchandiseSection;