import { BrowserRouter, Outlet } from "react-router-dom";
import Routes from "./Routes"
import First from "./pages/First/First"
import Second from "./pages/Second/Second"
 import Third from "./pages/Third/Third";
function App() {
  return (
   <>
     
     <BrowserRouter>
     <Outlet/>
    <Routes/>
    </BrowserRouter>
       </>
    
      
  )
}

export default App
