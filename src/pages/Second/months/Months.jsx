import { Button } from '@mui/material';
import React from 'react'

function Months() {
   const months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    return (
      <div style={{
          display:"flex",
          justifyContent:"space-evenly",
          flexDirection:"row",
          margin:"40px"
      }}> 
     {
              months.map((item)=>{
                  return(
                    <Button style={{
                        height:"70px",
                        fontSize:"15px",
                        width:"120px",
                        background:"#FFE663",
                        borderRadius:"100px"
                     }}> {item}</Button>  
                  )
              })
           }  
         </div>
    ) 
}

export default Months