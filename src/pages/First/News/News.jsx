import React from 'react'
import Recents from '../Recents/Recents'
import { Card, Typography } from '@mui/material'
import Cards from "./Cards"

function News() {
  return (
    <div style={{
        background:"#fbfddf",
        width:"100vw",display:'flex',
        justifyContent:"space-around"
    }}> 
     
       <Cards heading="News"/>
       <Cards heading="Announcements"/>
        
     
    </div>
  )
}

export default News