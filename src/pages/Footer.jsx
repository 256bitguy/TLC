import { Typography ,Button} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

function Footer() {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
         background:"#fbfddf",
        color:'white',
        height:"60vh",
        alignItems:"left",justifyContent:"space-evenly",
        borderTop:"5px solid black"
    }}>
        <div style={{width:"100vw",  display:"flex",justifyContent:"flex-start",flexDirection:"row"}}> 
 <img src='/images/logo.jpeg' width="150px" height="auto" borderRadius="30px"/>
            <Typography style={{
                color:"#711f72",
                fontSize:"30px",
                textAlign:"center"
            }} >Akalpit 2.0</Typography>
        </div>
        <div style={{width:"100vw", display:"flex",justifyContent:"flex-start",flexDirection:"column"}}> 
           <div style={{color:"black", width:"100vw"}}>
           <Typography textAlign={"center"} variant='h3'>
              Top Link
            </Typography>
           </div>

           <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around", 
           }}>

             <div style={{
            display:"flex",
            flexDirection:"column",
            
             width:"50vw"
           }}>
              <Link to="/">  <Button >Home</Button></Link>
              <Link to="/fourth">  <Button>About</Button></Link>
              <Link to="/gallery">  <Button>Teams</Button></Link>
                
                
                 </div> 
              <div style={{
            display:"flex",
            flexDirection:"column",  
           }}>
                <Button>Sponsors</Button>
                <Button>Join Us</Button>
                <Button>Others</Button>
                </div>

            <div>

            </div>
           </div>
            
        </div>
        <div style={{width:"100vw"}}>
            <Typography variant='h3' style={{ color:"black"}}>Contact Us</Typography>
            <Box style={{border:"2 px solid black"}}>
                <Typography style={{ color:"black",fontFamily:"cursive"}} variant='h4'> The literary club, CSJM univeristy, kalyanpur kanpur</Typography>
                <Typography style={{ color:"black",fontFamily:"cursive"}} variant='h5'>67vivekraj@gmail.com</Typography>
            </Box>
        </div>
        <div style={{width:"100vw"}}>
            <Typography variant='h3' style={{fontSize:"30%"}}>Connect Us</Typography>
            <Box style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
           <Link to="https://www.instagram.com/literary_club_csjmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">            <Avatar alt="Vivek" sx={{ width: 50, height: 50 }}src="/images/vivek.jpg" />
</Link>
            <Avatar alt="Vivek" sx={{ width: 50, height: 50 }}src="/images/vivek.jpg" />
                 
            </Box>
        </div>
    </div>
  )
}

export default Footer