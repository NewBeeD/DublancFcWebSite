import Image from "next/image";

import { Box } from "@mui/material";

interface Dimension {

  width: number,
  height: number

}

const TeamLogo = ({ width, height }: Dimension) => {
  
  return (
    
    // <Image 
    // src='/Logo/CCCULLOGO.png' 
    // alt="Team Logo"
    // layout="intrinsic"
    // width={width}
    // height={height}
    // />


    <Box display='flex' justifyContent='center'>
      <img src="/Logo/CCCULLOGO.png" alt="CCCUL LOGO" width={width} height={height} />
    </Box>

    

  );
}

export default TeamLogo;