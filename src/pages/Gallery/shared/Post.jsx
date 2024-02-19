import { Box, Card, Paper, Typography,Button } from '@mui/material'
import React from 'react'
import About from '../about/About'
function Post({item,fun}) {
 const {id,name,branch,post,src,message}=item;
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
    <Typography variant='h4'> {post}</Typography>
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
         src={src}
        style={{
            width:"300px",
            height:"300px",
            borderRadius:"180px",
            padding:"10px",
            objectFit:"cover"
               }}
          />
          
        
       <Button style={{fontSize:"30px"}} onClick={()=>fun({id})}> {name}</Button>
        <Typography variant='h6'> {branch}</Typography>
    </Card>
   
  </Box>
         )}

export default Post