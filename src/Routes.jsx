import First from "./pages/First/First"
import { useRoutes } from "react-router-dom";
import Second from "./pages/Second/Second";
import Third from "./pages/Third/Third";
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
                path:"/third",
                element:<Third/>
            },
            {
                path:"/fourth",
                element:<Fourth/>
            }
        ]
    )
}
export default Routes;