import { useContext } from "react"
import AppContext from "../context/AppContext"
import Button from "./Button"

const Panel = () => {
   const { buttons } = useContext(AppContext)

   return (
      <div className="panel">
         { buttons.map((button, index) => (
            <Button key={ index } { ...button } />
         )) }
      </div>
   )
}
export default Panel