 import { Button, Card, Typography } from '@mui/material'
import React from 'react'

function Years() {
    const year=["2022","2023","2024","2025"];
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-evenly",
        flexDirection:"row",
        margin:"40px"
    }}> 
   
         {
            year.map((item)=>{
                return(
                    <Button style={{
                        height:"120px",
                        fontSize:"70px",
                        width:"250px",
                        background:"#FFE663",
                        borderRadius:"100px"
                     }}> {item}</Button>  
                )
            })
         }  
         
         
         

    </div>
  )
}

export default Years