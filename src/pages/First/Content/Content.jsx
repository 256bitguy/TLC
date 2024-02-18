import { Button, Typography } from '@mui/material'
import { Outlet, Link } from 'react-router-dom'

export default function Content({ image }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: "row",
          marginTop: "10px",
          padding: "20px",
          background:"#fbfddf"
           }}
      >
        <div
          style={{
              padding: "15px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            flex:"3",lineHeight:"3.2rem"
          }}
        >
          <Typography variant="h1" style={{
            color:"#711f72",fontWeight:700,fontFamily:"poppins"
          }}> Welcome to the official Website of</Typography>
          <Typography variant="h2" style={{
            color:"#726fbc",fontWeight:700,fontFamily:"poppins"
          }}>The Literary Club</Typography>
          <Typography variant="h3" style={{
            color:"#25a5be",fontWeight:600,fontFamily:"poppins"
          }}>(Csjmu University -Kanpur)</Typography>
        </div>
        <div
          style={{
            flex: "1",
            display: 'flex',
            justifyContent: "center",
            marginTop: "20px",
             
          }}
        >
          <img src="/images/logo.jpeg" style={{ maxWidth: "300px", maxHeight: "300px" }} alt="club" />
        </div>
      </div>
      <div>
        <Link to="/fourth"><Button style={{fontSize:"25px"}}>About us....</Button></Link>
        <Outlet />
      </div>
    </>
  )
}
