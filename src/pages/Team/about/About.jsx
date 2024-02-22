import { Box, Typography } from '@mui/material'
import React ,{ useContext }from 'react'
import { TeamContext, TeamProvider } from '../TeamProvider';

function About( ) {
  const {team}=useContext(TeamContext);
  const {first}=team;
   
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
            {first.message}
            </Typography>
           <Typography variant='h5'
           style={{
            fontFamily:"Times Roman"
           }}>  </Typography>
           
        </Box>
    </div>
  )
}

export default About