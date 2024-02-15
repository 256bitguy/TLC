import React from 'react'
import ImageBox from '../../../component/shared/ImageBox'


function Winners() {
  return (
    <div style={{
        margin:"50px",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly"
    }}> 
         <ImageBox/>
         <ImageBox/>
         <ImageBox/>
    </div>
  )
}

export default Winners