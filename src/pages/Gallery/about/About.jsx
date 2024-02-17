import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div style={{
      
      padding:"10px",
      margin:"5px",
      width:"95vw",
      textAlign:"center"
    }}> 
        <Box >
          <Typography padding={"20px"} variant='h3'>
          [Literary Club Name]'s literary extravaganza proved to be a resounding success, bringing together the literary community for a day of inspiration, creativity, and shared passion for storytelling. The event's diverse offerings ensured there was something for everyone, making it a memorable celebration of the written word. The success of this literary extravaganza sets a promising precedent for future events that aim to enrich the cultural fabric of our community through literature.
          </Typography>
          <Typography variant='h6'> - Vivek Raj Srivastava</Typography>
        </Box>
    </div>
  )
}

export default About