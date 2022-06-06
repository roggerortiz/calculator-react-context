import { useContext } from "react"
import AppContext from "../context/AppContext"
import { ButtonEnum, OperatorEnum } from "../utils"
import Icon from "./Icon"

const Button = ({ type, icon, value }) => {
   const { isCleanAll, clean, backspace, plusminus, typing, calculate } = useContext(AppContext)

   const getClassName = () => {
      return `btn ${(type === ButtonEnum.OPERATOR) ? 'btn-action' : 'btn-value'}`
   }

   const getLabel = () => {
      return (value === OperatorEnum.CLEAN) ? (isCleanAll ? 'AC' : 'C') : value
   }

   const handleClick = () => {
      if (value === OperatorEnum.CLEAN) clean()
      else if (value === OperatorEnum.BACKSPACE) backspace()
      else if (value === OperatorEnum.PLUSMINUS) plusminus()
      else if (type === ButtonEnum.NUMBER) typing(value)
      else if (type === ButtonEnum.OPERATOR) calculate(value)
   }

   return (
      <button
         className={ getClassName() }
         onClick={ handleClick }
      >
         { icon ? <Icon icon={ icon } /> : getLabel() }
      </button>
   )
}

export default Button