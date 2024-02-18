import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Card, Typography } from '@mui/material';
import { Container } from '@mui/system';

function About() {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        sm: { flexDirection: "row" },
      }}
    >
      <div
        style={{
          flex: 1,
          flexBasis: "200px",
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            width: "35vw",
            height: "300px",
            alignItems: "center",
          }}
        >
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 100, height: 100, margin: "10px" }} />
          <div>
            <Typography paragraph={true}>Literary Admin</Typography>
            <Typography variant="h5" textAlign={"left"} margin={"20px"}>
              Vivek raj srivastva
            </Typography>
          </div>
        </Card>
      </div>
      <div
        style={{
          flex: 5,
          flexBasis: "200px",
          padding: "30px",
          margin: "40px",
        }}
      >
        <Typography
          style={{
            lineHeight: "3rem",
            fontSize: "20px",
            // Use marginLeft to move the text to the left
            marginLeft: "20px",
          }}
        >
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
          hfkhdsfeiurhefalrin
        </Typography>
      </div>
    </Container>
  );
}

export default About;
