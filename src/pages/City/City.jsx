import { useParams } from "react-router-dom"

const City = () => {

   const params = useParams()
   console.log(params);

   return (
      <div>City</div>
   )
}

export default City