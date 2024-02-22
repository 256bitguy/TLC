import React, { useContext } from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
  import { TeamContext, TeamProvider } from '../TeamProvider';

function Post() {
  
  const {team,updatePost}=useContext(TeamContext);
  const {first}=team;
  const ida=first.id;
  

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        borderRadius: "15px",
        background: "#fbfddf"
      }}
    >
      <Typography variant='h4'> {first.post} </Typography>
      <Card style={{
        width: "400px",
        height: "400px",
        margin: "10px",
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <img
           src={first.src}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "180px",
            padding: "10px",
            objectFit: "cover"
          }}
        />

        <Button style={{ fontSize: "30px" }}   > {first.name} </Button>
        <Typography variant='h6'> {first.branch} </Typography>
      </Card>
    </Box>
  );
}

export default Post;
