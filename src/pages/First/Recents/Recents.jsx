import React from 'react'
import ImageBox from '../../../component/shared/ImageBox'

function Recents({image}) {
  return (
    <div style={{
      margin: "50px",
      display: "flex",
       background:"#fbfddf",
      justifyContent: "space-evenly",
    }}> 
      <ImageBox item={image}/>
      <ImageBox item={image}/>
      <ImageBox item={image} />
      
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
