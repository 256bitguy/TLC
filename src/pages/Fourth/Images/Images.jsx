import { Card ,Button, Typography} from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
 import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
function Images() {
    const images=[
        {
            id:0,
            src:"https://images.unsplash.com/photo-1682686578707-140b042e8f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        },{
            id:1,
            src:"https://images.unsplash.com/photo-1707779734349-ef2bba17dfdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
        },{
            id:2,
            src:"https://images.unsplash.com/photo-1707871935699-d6c1e23a90d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
        },{
            id:3,
            src:"https://images.unsplash.com/photo-1707343843598-39755549ac9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
        },{
            id:4,
            src:"https://images.unsplash.com/photo-1708000590735-6aee991a7b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
        },{
            id:5,
            src:"https://images.unsplash.com/photo-1708000590735-6aee991a7b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
        },{
            id:6,
            src:"https://images.unsplash.com/photo-1708000590735-6aee991a7b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
        },{
            id:7,
            src:"https://images.unsplash.com/photo-1708000590735-6aee991a7b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
        }
    ]

    const [current,setCurrent]=useState( [{
      id:4,
      src:"https://images.unsplash.com/photo-1708000590735-6aee991a7b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
  }]);
    const [activeStep, setActiveStep] = useState(0);
    const theme = useTheme();
     
    function forward(activeStep){
        const firse=images.filter(item=>item.id==activeStep)
        setCurrent([...firse]);
        
    }

  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1)%images.length);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep - 1)%images.length);
    };
   return (
    <div 
    style={{
      display:"flex",
       justifyContent:"center",
      flexDirection:"column",
      padding:"20px"
      
    }}> 
        <div style={{
          width:"70vw",
          height:"70vh",
          border:"2px solid",
          alignSelf:"center",
          padding:"20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
        }}>
            {
            current.map((item)=>{
            return(
                <img src={item.src} width={"100%"} height={"100%"} />
            )})
            
            }
        </div>
        <div style={{
          alignSelf:"center",
          width:"80vw"
        }}> 
        <MobileStepper
      variant="dots"
      
      steps={images.length}
      
      position="static"
      
      activeStep={activeStep}
      
      sx={{ minWidth: 400, flexGrow: 1 }}
      
      nextButton={
        <Button
         size="small" 
         onClick={()=>{
            handleNext()
            forward(activeStep)
        }} 
        disabled={activeStep === images.length}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }

      backButton={
        <Button size="small" onClick={()=>{
            handleBack()
            forward(activeStep)
        }}  disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }

    />
        </div>
        
    </div>
  )
}

export default Images