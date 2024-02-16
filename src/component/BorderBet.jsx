import { Box, Typography } from '@mui/material'
import React from 'react'

function BorderBet({item}) {
     console.log(item);
  return (
    <div style={{
        height:"50px",
        width:"100vw",
        display:"flex",
        flexDirection:"row",
        textAlign:"center",
        background:"#3192e5",
        border:"2px solid black",
        justifyContent:"center",
        marginTop:"15px",
        textDecoration:"underline",
        color:"white"
    }}>
        <Box style={{
            textAlign:"center"
        }}>
            <Typography variant='h4'>
                {item}
            </Typography>
        </Box>
    </div>
  )
}

export default BorderBet