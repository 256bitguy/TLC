import React from 'react'
import ImageBox from '../../../component/shared/ImageBox'
import { Grid } from '@mui/material'

function Recents() {
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

export default Recents