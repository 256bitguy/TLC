import React from 'react'
import Navbar from '../Navbar'
import Years from './years/Years'
import Months from './months/Months'
import BorderBet from '../../component/BorderBet'
import { Typography } from '@mui/material'
import Winners from './Winners/Winners'
import GridImage from './GridImage/GridImage'

function Second() {
  return (
    <div> 
        <Navbar/>
        <Years/>
        <Months/>
        <div style={{
            textAlign:"center"
        }}>
        <Typography variant="h3">Events Name</Typography>
        </div>
        <BorderBet item={"Winners "}/>
        <Winners/>
        <BorderBet item={"Photos"}/>
        <GridImage/>
    </div>
  )
}

export default Second