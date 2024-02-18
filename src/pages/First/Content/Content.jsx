import { Button, Typography } from '@mui/material'
import { Outlet, Link } from 'react-router-dom'

export default function Content({ image }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: "column",
          marginTop: "10px",
          padding: "20px",
           
          // Corrected inline media query
          '@media (min-width: 800px)': {
            flexDirection: "row",
          }
        }}
      >
        <div
          style={{
            flex: "1 1 100%",
            gap: "15px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">Website of</Typography>
          <Typography variant="h3">The Literary Club</Typography>
          <Typography variant="h3">(Csjmu University -Kanpur)</Typography>
        </div>
        <div
          style={{
            flex: "1 1 100%",
            display: 'flex',
            justifyContent: "center",
            marginTop: "20px",
            border:"2px solid black"
          }}
        >
          <img src={image} style={{ maxWidth: "auto", height: "auto" }} alt="club" />
        </div>
      </div>
      <div>
        <Link to="/fourth"><Button>About us....</Button></Link>
        <Outlet />
      </div>
    </>
  )
}
