import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/system';

export default function AccordionUsage() {
  return (
    <div
    style={{
        height:"40%",
          background:"#fbfddf",
           padding:"5px",
           
    }}>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
            <Container style={{
            display:"flex",
            flexDirection:"row",
             
          }}>

             <Avatar alt="Vivek" sx={{ width: 100, height: 100 }}src="/images/vivek.jpg" />
         <Typography variant='h4' style={{padding:"5px",margin:"5px",border:"2px soild black"}}>Vivek Raj</Typography>
            </Container>
        </AccordionSummary>
        <AccordionDetails >
       <Typography style={{fontFamily:"cursive",textAlign:"center",fontSize:"17px"}}>
Anchoring and public speaking have taught me the power of words and the magic of effective communication. It's not just about speaking; it's about connecting, engaging, and leaving an impact that resonates with your audience long after the event has concluded.
        My journey has been a testament to the belief that skills are not just assets but the very foundation upon which we build our dreams. Whether it is managing a team, leading a project, or anchoring an event, the essence of our success lies in our ability to bring our skills to life, to mold them in ways that not only achieve goals but also inspire and uplift those around us.
        </Typography> 
        </AccordionDetails>
      </Accordion>   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
            <Container style={{
            display:"flex",
            flexDirection:"row",
             
          }}>

             <Avatar alt="Vivek" sx={{ width: 100, height: 100 }}src="/images/vivek.jpg" />
         <Typography variant='h4' style={{padding:"5px",margin:"5px",border:"2px soild black"}}>Vivek Raj</Typography>
            </Container>
        </AccordionSummary>
        <AccordionDetails >
       <Typography style={{fontFamily:"cursive",textAlign:"center",fontSize:"17px"}}>
Anchoring and public speaking have taught me the power of words and the magic of effective communication. It's not just about speaking; it's about connecting, engaging, and leaving an impact that resonates with your audience long after the event has concluded.
        My journey has been a testament to the belief that skills are not just assets but the very foundation upon which we build our dreams. Whether it is managing a team, leading a project, or anchoring an event, the essence of our success lies in our ability to bring our skills to life, to mold them in ways that not only achieve goals but also inspire and uplift those around us.
        </Typography> 
        </AccordionDetails>
      </Accordion>   <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
            <Container style={{
            display:"flex",
            flexDirection:"row",
             
          }}>

             <Avatar alt="Vivek" sx={{ width: 100, height: 100 }}src="/images/vivek.jpg" />
         <Typography variant='h4' style={{padding:"5px",margin:"5px",border:"2px soild black"}}>Vivek Raj</Typography>
            </Container>
        </AccordionSummary>
        <AccordionDetails >
       <Typography style={{fontFamily:"cursive",textAlign:"center",fontSize:"17px"}}>
Anchoring and public speaking have taught me the power of words and the magic of effective communication. It's not just about speaking; it's about connecting, engaging, and leaving an impact that resonates with your audience long after the event has concluded.
        My journey has been a testament to the belief that skills are not just assets but the very foundation upon which we build our dreams. Whether it is managing a team, leading a project, or anchoring an event, the essence of our success lies in our ability to bring our skills to life, to mold them in ways that not only achieve goals but also inspire and uplift those around us.
        </Typography> 
        </AccordionDetails>
      </Accordion> 

      

    </div>
  );
}
