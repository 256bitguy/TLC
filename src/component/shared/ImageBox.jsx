import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
 
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
 
 
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ImageBox() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image=" https://images.pexels.com/photos/16176110/pexels-photo-16176110/free-photo-of-woman-s-photography.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Paella dish"
        style={{
          borderRadius:"170px",
          height:"300px"
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           Vivek Raj Srivastava
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Secrartary(Literary Club)
        </Typography>
      </CardContent>
      
        
       
    </Card>
  );
}
