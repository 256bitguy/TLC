import React from 'react'
import Recents from '../Recents/Recents'
import { Card, Typography } from '@mui/material'
import Cards from "./Cards"

function News() {
  return (
    <div style={{
        background:"#FFE663",
        width:"100vw",display:'flex',
        justifyContent:"space-around"
    }}> 
     
       <Cards/>
       <Cards/>
     
    </div>
  )
}

export default News