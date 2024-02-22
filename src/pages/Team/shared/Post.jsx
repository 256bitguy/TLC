import React, { useContext } from 'react';
import { Box, Card, Typography, Button } from '@mui/material';
  import { TeamContext, TeamProvider } from '../TeamProvider';

function Post({obj,asdf}) {
  
  const {team,updatePost,updateMembers}=useContext(TeamContext);
   asdf==0?obj=team.first:console.log("first");;
  const ida=obj.id;
  

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
      <Typography variant='h4'> {obj.post} </Typography>
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
           src={obj.src}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "180px",
            padding: "10px",
            objectFit: "cover"
          }}
        />

        <Button style={{ fontSize: "30px" }}  onClick={()=>{
          updatePost(ida);
          updateMembers(ida)}} > {obj.name} </Button>
        <Typography variant='h6'> {obj.branch} </Typography>
      </Card>
    </Box>
  );
}

export default Post;
