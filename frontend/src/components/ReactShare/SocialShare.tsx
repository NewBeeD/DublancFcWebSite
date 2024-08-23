import { Box, Stack, Typography } from '@mui/material';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

interface SocialParametersType {

  url: string,
  title: string
}

const SocialShare = ({ url, title }: SocialParametersType) => {


  return (
    
    <Box>    

      <Stack direction='row' spacing={1}>

        <Box>
          <Typography variant='h5'>Share:</Typography>
        </Box>

        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>

        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
      </Stack>
    </Box>
  );
};

export default SocialShare;
