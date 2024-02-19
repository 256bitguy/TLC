import React from 'react'
import Navbar from '../Navbar'
import Post from './shared/Post'
 
import BorderBet from '../../component/BorderBet'
import Members from "./members/Members"
import About from './about/About'
import Footer from '../Footer'

function Gallery() {
  return (
    <div
    style={{
      background:"#fbfddf"
    }}>
        <Navbar/>
        <Post item={"Secratary"}/>
        <About/>
        <BorderBet item={"Core Team Members"}/>
        <Members/>
        <Footer/>
    </div>
  )
}

export default Gallery