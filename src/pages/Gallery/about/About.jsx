import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
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
            My journey has been a testament to the belief that skills are not just assets but the very foundation upon which we build our dreams. Whether it is managing a team, leading a project, or anchoring an event, the essence of our success lies in our ability to bring our skills to life, to mold them in ways that not only achieve goals but also inspire and uplift those around us.
Anchoring and public speaking have taught me the power of words and the magic of effective communication. It's not just about speaking; it's about connecting, engaging, and leaving an impact that resonates with your audience long after the event has concluded.
I am proud of the skills I've developed, the challenges I've overcome, and the work I've accomplished. But more than anything, I am excited about the journey ahead—the opportunities to learn, to grow, and to contribute in even more meaningful ways.
            </Typography>
           <Typography variant='h5'
           style={{
            fontFamily:"Times Roman"
           }}> - Soumya Mishra(BJMC)</Typography>
           
        </Box>
    </div>
  )
}

export default About