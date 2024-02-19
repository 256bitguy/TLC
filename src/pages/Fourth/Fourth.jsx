import React from 'react'
import Navbar from '../Navbar';
import Images from './Images/Images';
import About from './about/About';
 import BorderBet from "../../component/BorderBet"
import Footer from '../Footer';

function Fourth() {
  return (
    <div>
         <Navbar/>
          <Images/>
          <BorderBet item="About Us...."/>
          <About/>
          <Footer/>
    </div>
  )
}

export default Fourth;