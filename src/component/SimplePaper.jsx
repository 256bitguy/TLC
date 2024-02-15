import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        height:"400px",
        width:"400px",
        background:"#121231",
        
      }}
    >
       
      
      <Paper elevation={6} />
    </Box>
  );
}
