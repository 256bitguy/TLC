import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:  "#abcd12",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:  "#a12a21",
  height:"200px"
}));

export default function GridImage() {
  return (
    <Box >
      <Grid container spacing={2} style={{justifyContent:"center"}}>
        
        <Grid item xs={8} md={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=8</Item>  
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8} md={4}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
