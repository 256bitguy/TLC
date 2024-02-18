import { Box, Card, Paper, Typography } from '@mui/material'
import React from 'react'

function Post({item}) {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      margin:"10px",
      borderRadius:"15px"
    }}
  >
    <Typography variant='h3' 
    style={{
        background:"#FFE663",
        padding:"15px",margin:"10px"
    }}>   
    {item}</Typography>
    <Card style={{
        width:"400px",
        height:"400px",
         margin:"10px",
         border:"none",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
          
    }}>
        <img 
        src='public/images/mani2.jpeg'
        style={{
            width:"300px",
            height:"300px",
            borderRadius:"180px",
            padding:"10px",
             
            objectFit:"cover"
               }}
          />
        <Typography variant='h4'> Mani Shukla</Typography>
        <Typography variant='h5'> BA Program</Typography>
    </Card>
  </Box>
         )}

export default Post