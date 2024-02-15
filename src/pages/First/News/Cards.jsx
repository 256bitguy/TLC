import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ width:"600px",height:"400px", border:"2px solid black" ,padding:"50px",margin:"50px",borderRadius:"4  0px"}}>
      <Typography>News</Typography>
      <CardContent>
        <Typography >
          Word of the DayCard: a surface-level container for grouping related components.
Card Content: the wrapper for the Card content.
Card Header: an optional wrapper for the Card header.
Card Media: an optional container for displaying background images and gradient layers behind the Card Content.
Card Actions: an optional wrapper that groups a set of buttons.
Card Action Area: an optional wrapper that allows users to interact with the specified area of the Card.
        </Typography>
        
      </CardContent>
       
    </Card>
  );
}