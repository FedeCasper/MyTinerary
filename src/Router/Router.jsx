import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Cities from "../pages/Cities/Cities.jsx";
import LayoutMain  from "../pages/LayoutMain.jsx";
import City from "../pages/City/City.jsx";

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
            },
            {
               path: "/city/:id",
               element: <City />
            }
         ]
      }
   ]
)

export default router