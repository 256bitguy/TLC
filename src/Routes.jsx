import First from "./pages/First/First"
import { useRoutes } from "react-router-dom";
import Second from "./pages/Second/Second";
import Gallery from "./pages/Gallery/Gallery";
import Fourth from "./pages/Fourth/Fourth";


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
            }
        ]
    )
}
export default Routes;