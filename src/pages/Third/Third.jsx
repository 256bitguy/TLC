import React from 'react'
import Navbar from '../Navbar'
import Post from './shared/Post'
import About from './about/About'
import BorderBet from './../../component/BorderBet'
import Members from "./members/Members"

function Third() {
  return (
    <div>
        <Navbar/>
        <Post item={"Secratary"}/>
        <About/>
        <BorderBet item={"Core Team Members"}/>
        <Members/>
    </div>
  )
}

export default Third