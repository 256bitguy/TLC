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
        background:"#FFE663",
        border:"2px solid black",
        justifyContent:"center",
        marginTop:"15px",
        textDecoration:"underline"
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