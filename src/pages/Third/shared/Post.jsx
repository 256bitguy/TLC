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
        src='https://images.pexels.com/photos/16176110/pexels-photo-16176110/free-photo-of-woman-s-photography.png?auto=compress&cs=tinysrgb&w=600&lazy=load'
        style={{
            width:"300px",
            height:"300px",
            borderRadius:"180px",
            padding:"10px",
               }}
          />
        <Typography variant='h5'> Vivek Raj Srivastava</Typography>
        <Typography variant='h5'> B.Tech</Typography>
    </Card>
  </Box>
         )}

export default Post