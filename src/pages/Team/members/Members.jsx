import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Post from '../shared/Post';
import { TeamContext, TeamProvider } from '../TeamProvider';


export default function GridImage( ) {
     
     const { team, updatePost, updateMembers } = useContext(TeamContext);
    const {members,first}=team
     console.log(team);
   
  return (
    <Box 
    style={{
        border:"2px solid black",
        padding:"10px"
    }}>
      <Grid container spacing={2} style={{justifyContent:"center"}}>
        
        {
         members.map((item)=>{
          return(
            <Grid item xs={8} md={4}>
            <Post obj={item} asdf={1}/>
          </Grid>
          )
         })
        }
         
      </Grid>
    </Box>
  );
}
