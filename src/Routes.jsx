import First from "./pages/First/First"
import { useRoutes } from "react-router-dom";
import Second from "./pages/Second/Second";
import Third from "./pages/Third/Third";

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
            }
        ]
    )
}
export default Routes;