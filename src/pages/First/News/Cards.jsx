import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({heading}) {
  return (
    <Card
      sx={{
        width: "80%",
        height: "80%",
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "40px",
        overflow: "hidden",
      }}
    >
      <Typography style={{ textAlign: "center" }} variant="h4">
        {heading}
      </Typography>
      <CardContent sx={{ height: '100%', overflow: 'hidden' }}>
        <marquee direction="up" style={{ display: 'block', height: '100%' }}>
        <ul style={{
          fontSize:"20px"
        }}>
          <li>sdfdfasdf</li>
          <li>sdfdfasdf</li>
          <li>sdfdfasdf</li>
          <li>sdfdfasdf</li>
          <li>sdfdfasdf</li>
          <li>sdfdfasdf</li>
        </ul>
        </marquee>
      </CardContent>
    </Card>
  );
}
