import BorderBet from "../../component/BorderBet"
import Content from "./Content/Content"
import Navbar from "../Navbar"
import News from "./News/News"
import Recents from "./Recents/Recents"
import About from "./About/About"

 
function First() {
 

  return (
    <div>
     <Navbar/>
     <Content/>
     <About/>
     <BorderBet item={"RECENT HIGHLIGHTS"}/>
     <Recents/>
     <News/>
     </div>
  )
}

export default First
