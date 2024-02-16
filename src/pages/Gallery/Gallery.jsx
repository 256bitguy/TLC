import React from 'react'
import Navbar from '../Navbar'
import Post from './shared/Post'
 
import BorderBet from '../../component/BorderBet'
import Members from "./members/Members"

function Gallery() {
  return (
    <div>
        <Navbar/>
        <Post item={"Secratary"}/>
        
        <BorderBet item={"Core Team Members"}/>
        <Members/>
    </div>
  )
}

export default Gallery