import { Link } from "react-router-dom"

const Cities = () => {
   return (
      <>
         <h2>Cities!</h2>
         <Link to="/city/1">Details 1</Link>
         <Link to="/city/2">Details 2</Link>
         <Link to="/city/3">Details 3</Link>
      </>
   )
}

export default Cities