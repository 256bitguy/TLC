import { Box, Container } from '@mui/system'
import React from 'react'
// import Post from '../Gallery/shared/Post'
import { Typography } from '@mui/material'
import Navbar from '../Navbar'
import Footer from '../Footer'


function Developers() {
  return (
     <Container>
        <Navbar/>
        <Container style={{height:"60vh"}}>
            <Box style={{border:"2px solid black"}}>
                <Typography> Vivek Raj Srivastava</Typography>
              
                <Typography> B.Tech CSE 2024</Typography>
            </Box>
        </Container>
        <Footer/>
     </Container>
  )
}

export default Developers;