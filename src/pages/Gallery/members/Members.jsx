import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Post from '../shared/Post';
 

export default function GridImage( {arr,fun}) {
     console.log(arr);
  return (
    <Box 
    style={{
        border:"2px solid black",
        padding:"10px"
    }}>
      <Grid container spacing={2} style={{justifyContent:"center"}}>
        
        {
         arr.map((item)=>{
          return(
            <Grid item xs={8} md={4}>
            <Post  item={item} fun={fun}/>
          </Grid>
          )
         })
        }
         
      </Grid>
    </Box>
  );
}
