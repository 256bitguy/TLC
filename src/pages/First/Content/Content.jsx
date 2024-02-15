import { Button, Typography } from '@mui/material'
import React from 'react'
import SimplePaper from '../../../component/SimplePaper'

export default function Content() {
  return (
   <>
    <div style={{
        display:'flex',
        flexDirection:"row",
        marginTop:"5px",padding:"20px"
    }}> 
        <div style={{
            flexBasis:"50vw",
            gap:"15px"
        }}>
              <Typography variant="h2">Welcome To the Offical Website of</Typography>
              <Typography  variant="h3">The Literary Club</Typography>
              <Typography variant="h3" >(Csjmu University -Kanpur)</Typography>
        </div>
        <div style={{
            flexBasis:"20vw",
            alignSelf:"flex-end"
    }}>
                <SimplePaper/>
        </div>

    </div>
   <div>
            <Button>About us....</Button>
   </div>
   </>
  )
}
