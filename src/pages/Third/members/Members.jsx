import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Post from '../shared/Post';
 

export default function GridImage() {
  return (
    <Box 
    style={{
        border:"2px solid black",
        padding:"10px"
    }}>
      <Grid container spacing={2} style={{justifyContent:"center"}}>
        
        <Grid item xs={8} md={4}>
          <Post item={"Joint Seceratary"}/>
        </Grid>
        <Grid item xs={8} md={4}>
           <Post item={"Joint Seceratary"} />
        </Grid>
        <Grid item xs={8} md={4}>
           <Post item={"Additional Seceratary"} />
        </Grid>
        <Grid item xs={8} md={4}>
           <Post item={"Additional Seceratary"}/>
        </Grid>
        <Grid item xs={8} md={4}>
           <Post item={"Volunteer Head"}/>  
        </Grid>
        <Grid item xs={8} md={4}>
           <Post item={"Anchor"}/>
        </Grid>
         
      </Grid>
    </Box>
  );
}
