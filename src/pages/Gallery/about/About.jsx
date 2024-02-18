import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <div style={{
      
      padding:"10px",
      margin:"5px",
      width:"95vw",
      textAlign:"center"
    }}> 
        <Box >
          <Typography   variant='h5' style={{
            textAlign:"center",
            lineHeight:"2.5rem"
          }}>
          bonjour!!! I'm Mani Shukla, pursuing BA program (1st year) just another girl you'll find everywhere with a book in her hands or in her bag. 
My personality is all about literature from my favourite author Jane Austen who gave me my fictional love Mr William Darcy to Dostoevsky who showed me how cruel this world could be I've known that I'm nothing without literature and philosophy.
With earphones in my ears jamming either to taylor or to lana everyone disappears for me.
but if you ever find me with coffee in my hand better don't approach me because then I'm in another state of extrovertness and really can blow your mind in short words "me apni hi favourite hu"
Dare you try to talk in front of me because when I start talking everyone just listens.
and guess what I'm a poetess, gifted with words that probably may not rhyme but have the power to make you think deep          </Typography>
          <Typography variant='h5'> - Mani Shukla</Typography>
        </Box>
    </div>
  )
}

export default About