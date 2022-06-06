import { useContext } from "react"
import AppContext from "../context/AppContext"

const Display = () => {
   const { history, message } = useContext(AppContext)

   return (
      <div className="display">
         <div className="history">{ history }</div>
         <div className="message">{ message }</div>
      </div>
   )
}
export default Display