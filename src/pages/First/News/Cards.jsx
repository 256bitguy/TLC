import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card
      sx={{
        width: "600px",
        height: "400px",
        border: "2px solid black",
        padding: "50px",
        margin: "50px",
        borderRadius: "40px",
        overflow: "hidden",
      }}
    >
      <Typography style={{ textAlign: "center" }} variant="h4">
        News
      </Typography>
      <CardContent sx={{ height: '100%', overflow: 'hidden' }}>
        <marquee direction="right" style={{ display: 'block', height: '100%' }}>
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
