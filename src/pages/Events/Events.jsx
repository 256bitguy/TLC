import React from 'react'
import { Button, Typography } from '@mui/material'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Container } from '@mui/system'
const  Events=()=> {
    const events=['Story telling','essay writing','poetry','speech','debate'];
  return (
    <div>
        <Navbar/>
          <Container style={{display:"flex"}}>
          <Container style={{
            display:'flex',flexDirection:"column",justifyContent:"space-around"
          }}>
          { events.map((item)=>{
                return(
                    <Button>{item}</Button>
                )
           })}
          </Container>
            <Container style={{display:'flex',flexDirection:"column"}}>
              <Container >
                <Typography variant='h3' fontFamily={"poppins"} style={{textAlign:"center"}}>{events[0]}</Typography>
                </Container>
                <Container>
                <Typography paragraph fontSize={"30px"} fontFamily={"poppins"}>
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  sdfasdfasdfasdfasfvdggsdskldjf
                  </Typography>
                </Container>
            </Container>
          </Container>
      
        <Footer/>
    </div>
  )
}

export default Events;