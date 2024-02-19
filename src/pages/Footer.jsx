import { Typography ,Button, Avatar} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
 
function Footer() {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
         background:"#fbfddf",
        color:'white',
        height:"60vh",
        alignItems:"left",justifyContent:"space-evenly"
    }}>
        <div style={{width:"100vw",border:"2px solid black", display:"flex",justifyContent:"flex-start",flexDirection:"row"}}> 
 <img src='/images/logo.jpeg' width="150px" height="auto" borderRadius="30px"/>
            <Typography style={{
                color:"#711f72",
                fontSize:"30px",
                textAlign:"center"
            }} >Akalpit 2.0</Typography>
        </div>
        <div style={{width:"100vw",border:"2px solid black",display:"flex",justifyContent:"flex-start",flexDirection:"row"}}> 

             <Typography variant='h3' style={{fontSize:"20%",fontStyle:"underline"}}>
                Top Links
             </Typography>
            
        </div>
        <div style={{width:"100vw",border:"2px solid black"}}>
            <Typography variant='h3' style={{fontSize:"80%"}}>Contact Us</Typography>
            <Box>
                <Typography>The literary club, CSJM univeristy, kalyanpur kanpur</Typography>
                <Typography>67vivekraj@gmail.com</Typography>
            </Box>
        </div>
        <div style={{width:"100vw",border:"2px solid black"}}>
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