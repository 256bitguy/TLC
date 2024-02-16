import { Button, Select, MenuItem } from '@mui/material';
import React from 'react'

function Months() {
  const months=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
  
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-evenly",
      flexDirection:"row",
      margin:"40px",
    }}> 
      {/* Media query for hiding buttons and displaying dropdown */}
      <style>
        {`
          @media (max-width: 800px) {
            .button-container {
              display: none;
            }

            .dropdown-container {
              display: block;
            }
          }

          @media (min-width: 801px) {
            .button-container {
              display: flex;
            }

            .dropdown-container {
              display: none;
            }
          }
        `}
      </style>

      {/* Buttons for screens above 800px */}
      <div className="button-container">
        {months.map((item) => (
          <Button key={item} style={{
            height:"70px",
            fontSize:"15px",
            width:"120px",
            background:"#FFE663",
            borderRadius:"100px",
          }}>
            {item}
          </Button>
        ))}
      </div>

      {/* Dropdown for screens below 800px */}
      <div className="dropdown-container">
        <Select>
          {months.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default Months;
