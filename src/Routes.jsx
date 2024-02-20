import First from "./pages/First/First"
import { useRoutes } from "react-router-dom";
import Second from "./pages/Second/Second";
import Gallery from "./pages/Gallery/Gallery";
import Fourth from "./pages/Fourth/Fourth";
import Events  from "./pages/Events/Events";
import Developers from "./pages/developers/Developers";

const Routes=()=>{
    return useRoutes(
        [
            {
                path:"/",
                element:<First/>
            },
            {
                path:"/second",
                element:<Second/>
            },
            {
                path:"/gallery",
                element:<Gallery/>
            },
            {
                path:"/fourth",
                element:<Fourth/>
            },
            {
                path:"/events",
                element:<Events/>
            },
            {
                path:"/developers",
                element:<Developers/>
            }
        ]
    )
}
export default Routes;