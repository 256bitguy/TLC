import BorderBet from "../../component/BorderBet"
import Content from "./Content/Content"
import Navbar from "../Navbar"
import News from "./News/News"
import Recents from "./Recents/Recents"
import About from "./About/About"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from "../Footer"

 
function First() {
  const [imageh,setImagesh]=useState();
    useEffect(()=>{
       async function loadImage(){
        try{
            const data=await axios.get("https://ashja2909.github.io/images/image.json");
            console.log(data.data.members);
            setImagesh(data.data.members[0].src);
        }
        catch(error){
            console.log(error)
        }
       }
       loadImage();
    },[])

  return (
    <div>
     <Navbar/>
     <Content image={imageh}/>
     <About/>
     <BorderBet item={"RECENT HIGHLIGHTS"}/>
     <Recents image={imageh}/>
     <News/>
     <Footer/>
     </div>
  )
}

export default First
