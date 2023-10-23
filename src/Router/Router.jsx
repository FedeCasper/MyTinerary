import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Cities from "../pages/Cities/Cities.jsx";
import LayoutMain  from "../pages/LayoutMain.jsx";

const router = createBrowserRouter(
   [
      {
         path: "/",
         element: <LayoutMain />,
         children: [
            {
               path: "/",
               element: <Home />
            },
            {
               path: "/cities",
               element: <Cities />
            }
         ]
      }
   ]
)

export default router