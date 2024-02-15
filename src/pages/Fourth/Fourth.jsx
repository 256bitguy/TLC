import React from 'react'
import Navbar from '../Navbar';
import Images from './Images/Images';
import About from './about/About';
 import BorderBet from "../../component/BorderBet"

function Fourth() {
  return (
    <div>
         <Navbar/>
          <Images/>
          <BorderBet item="About Us...."/>
          <About/>
    </div>
  )
}

export default Fourth;