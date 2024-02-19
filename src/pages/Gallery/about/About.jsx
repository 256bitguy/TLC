import { Box, Typography } from '@mui/material'
import React from 'react'

function About({mess,name}) {
  return (
    <div style={{
      background:"#fbfddf",
      padding:"10px",
      margin:"5px",
      width:"95vw",
      textAlign:"center"
    }}> 
        <Box 
        style={{
            padding:"20px",
            
        }}>
          <Typography   variant='h5' style={{
            textAlign:"center",
            lineHeight:"2rem",
            fontFamily:"Times Roman"
            
          }}>
            {mess}
            </Typography>
           <Typography variant='h5'
           style={{
            fontFamily:"Times Roman"
           }}> -{name}</Typography>
           
        </Box>
    </div>
  )
}

export default About