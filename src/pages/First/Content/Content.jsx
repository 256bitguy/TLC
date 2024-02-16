import { Button, Typography } from '@mui/material'
import React from 'react'
import SimplePaper from '../../../component/SimplePaper'
import { Outlet ,Link} from 'react-router-dom'

export default function Content() {
  return (
   <>
    <div style={{
        display:'flex',
        flexDirection:"row",
        marginTop:"10px",
        padding:"20px"
    }}> 
        <div style={{
            flexBasis:"50vw",
            gap:"15px",marginTop:"20px",
            display:"flex",
            flexDirection:"column"
        }}>
              <Typography variant="h2"> Welcome To the Offical Website of</Typography>
              <Typography  variant="h3">The Literary Club</Typography>
              <Typography variant="h3" >(Csjmu University -Kanpur)</Typography>
        </div>
        <div style={{
            flexBasis:"50vw",
             display:'flex',
             justifyContent:"center",
             
    }}>
              <img src='https://github.com/256bitguy/portfolio/blob/master/hand.jpg?raw=true'/>
        </div>

    </div>
   <div>
           <Link to="/fourth"><Button>About us....</Button></Link>
           <Outlet/>
   </div>
   </>
  )
}
