import { Box, Card, Paper, Typography,Button } from '@mui/material'
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
      borderRadius:"15px",
      background:"#fbfddf"
    }}
  >
    <Button
    background="primary"
    style={{
      height:"100px",
      fontSize:"40px"
    }}>
      Secretary
    </Button>
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
        src='public/images/soumya.jpg'
        style={{
            width:"300px",
            height:"300px",
            borderRadius:"180px",
            padding:"10px",
             
            objectFit:"cover"
               }}
          />
        <Typography variant='h4'> Soumya Mishra</Typography>
        <Typography variant='h5'> BJMC</Typography>
    </Card>
  </Box>
         )}

export default Post