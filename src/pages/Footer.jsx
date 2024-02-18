import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function Footer() {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        background:"blue",
        color:'white',
        height:"60vh",
        alignItems:"left"
    }}>
        <div> 
            <Typography>logo</Typography>
            <Typography>theme</Typography>
        </div>
        <div> 
             <Typography variant='h3' style={{fontSize:"20%",fontStyle:"underline"}}></Typography>
             <div style={{display:"flex",flexDirection:"row",width:"30vw",height:"10vh"}}>
                
             <Box><Typography variant='h3'>Top Links</Typography></Box>
             <Box >
                
                    <li>home</li>
                    <li>About</li>
                    <li>Events</li>
                
                </Box>
                <Box>
                
                    <li>home</li>
                    <li>About</li>
                    <li>Events</li>
                
                </Box>
             </div>
        </div>
        <div>
            <Typography variant='h3' style={{fontSize:"80%"}}>Contact Us</Typography>
            <Box>
                <Typography>The literary club, CSJM univeristy, kalyanpur kanpur</Typography>
                <Typography>67vivekraj@gmail.com</Typography>
            </Box>
        </div>
        <div>
            <Typography variant='h3' style={{fontSize:"30%"}}>Connect Us</Typography>
            <Box style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                <li>insta</li>
                <li>insta</li>
                <li>insta</li>
            </Box>
        </div>
    </div>
  )
}

export default Footer