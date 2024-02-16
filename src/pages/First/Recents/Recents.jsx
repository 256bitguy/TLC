import React from 'react'
import ImageBox from '../../../component/shared/ImageBox'

function Recents() {
  return (
    <div style={{
      margin: "50px",
      display: "flex",
       
      justifyContent: "space-evenly",
    }}> 
      <ImageBox />
      <ImageBox />
      <ImageBox />
      
      {/* Add a media query for smaller screens */}
      <style>
        {`
          @media (max-width: 800px) {
            div {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Recents;
