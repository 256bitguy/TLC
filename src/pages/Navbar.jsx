import { Button, Typography } from '@mui/material'
import React from 'react'
import BasicMenu from '../component/Meni'
import { Link, Outlet } from 'react-router-dom'
 
export default function Navbar() {
  return (
     <div style={
        {
            display:"flex",
            flexDirection:"row",
            width:"100vw",
            
             
           
        }
     }>
       
       
        <div style={{
            flex:"2",
            flexBasis:"20vw",
            alignContent:"flex-start"
        }}> 
            <Typography variant="h6" gutterBottom>
       The Literary Club
      </Typography>
        </div>
        
        
        <div style={{
            flex:"5",
             display:"flex",
             justifyContent:"space-around",
            alignContent:"center",
             
            
        }}> 
          <Link>  <Button >Home </Button> </Link>
            
            <Button >Events </Button>
            <Button >Teams </Button>
            <Button >About </Button>
            <Button >Join us </Button>
        </div>

        <div style={{flex:2,alignContent:"flex-end"}}>
            <BasicMenu/>
        </div>
        <Outlet/>
     </div>
  )
}
