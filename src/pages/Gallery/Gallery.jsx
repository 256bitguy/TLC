import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Post from './shared/Post'
 
import BorderBet from '../../component/BorderBet'
import Members from "./members/Members"
import Footer from '../Footer'
import axios from 'axios'
 

function Gallery() {
  const [memcard,setMemcard]=useState([]);
  const [current,setCurrent]=useState(0);
  const [display,setDisplay]=useState({   "id":0,
  "name":"vivek Raj Srivastava",
  "branch":"B Tech",
  "post":"Secratary",
  "message":"hello team so there is nothing to specail byb me .",
  "src":"https://github.com/256bitguy/images/blob/main/store/vivek.jpg?raw=true"
      }, );
  const [rest,setRest]=useState([]);
  useEffect(()=>{
      const membersData=async()=>{
     try{
        const response=await axios.get("https://ashja2909.github.io/images/image.json");
        const data=response.data;
       setMemcard(data.members);
      
      }
     catch(error){
      console.log(error);
     }
    }
      membersData();
     
    },[]);
 
  //this will be used to display the current position of the team member
function abkya(id){
  const next=memcard.filter((item)=>item.id==current);
  const resst=memcard.filter((item)=>item.id!=current);
  setCurrent(id);
  setDisplay(next);
  setRest(resst);
  console.log(display)
  console.log(resst)
}

  return (
    <div
    style={{
      background:"#fbfddf"
    }}>
        <Navbar/>
        <Post item={display} fun={abkya}/>
       
        <BorderBet item={"Core Team Members"}/>
        <Members arr={rest} fun={abkya}/>
        <Footer/>
    </div>
  )
}

export default Gallery