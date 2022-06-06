import { useEffect, useState } from "react"
import { buttons, NumberEnum, OperatorEnum } from "../utils"
import AppContext from "./AppContext"

const AppStore = ({ children }) => {
   const [number, setNumber] = useState(0)
   const [result, setResult] = useState(0)
   const [history, setHistory] = useState('')
   const [message, setMessage] = useState('0')
   const [operator, setOperator] = useState(null)
   const [isDecimal, setIsDecimal] = useState(false)
   const [isCleanAll, setIsCleanAll] = useState(true)

   const getResult = (value) => {
      if (value === OperatorEnum.PLUS) return (result + number)
      else if (value === OperatorEnum.MINUS) return (result - number)
      else if (value === OperatorEnum.MULTIPLY) return (result * number)
      else if (value === OperatorEnum.DIVIDE) return number > 0 ? (result * number) : NaN
      else if (value === OperatorEnum.PERCENT) return result > 0 ? (result / 100) : (number / 100)
   }

   const clean = () => {
      setNumber(0)
      setResult(0)
      setMessage('0')
      setOperator(true)

      if (isCleanAll) setHistory('')
      else setIsCleanAll(true)
   }

   const backspace = () => {
      if (number === 0) return
      const newHistory = history.slice(0, -1)
      let newNumber = number.toString().slice(0, -1)
      if (newNumber === '') newNumber = '0'
      setNumber(Number(newNumber))
      setHistory(newHistory)
      setMessage(newNumber)
      setIsDecimal(false)
   }

   const plusminus = () => {
      // TODO: think about this
   }

   const typing = (value) => {
      if (isDecimal) return
      const newNumber = `${number === 0 ? '' : number}${value}`
      setIsDecimal(value === NumberEnum.DECIMALDOT)
      setHistory(`${history}${value}`)
      setNumber(Number(newNumber))
      setMessage(newNumber)
      setIsCleanAll(false)
   }

   const calculate = (value) => {
      const isEquals = (value === OperatorEnum.EQUALS)
      const isPercent = (value === OperatorEnum.PERCENT)

      if (isEquals) {
         value = operator
         setOperator(null)
      } else {
         setOperator(value)
      }

      if (value === OperatorEnum.DIVIDE && number === 0) {
         setMessage('No se puede dividir entre 0')
         setOperator(null)
         setHistory('')
         setResult(0)
         setNumber(0)
         return
      }

      const newResult = getResult(value)
      const newHistory = (isEquals || isPercent) ? `${newResult}` : `${history}${value}`

      setMessage(`${newResult}`)
      setHistory(newHistory)
      setResult(newResult)
      setNumber(0)
   }

   useEffect(() => {
      console.log(number, result)
   }, [number, result])

   return (
      <AppContext.Provider
         value={ {
            number,
            result,
            history,
            message,
            buttons,
            isCleanAll,
            clean,
            backspace,
            typing,
            calculate,
         } }
      >
         { children }
      </AppContext.Provider>
   )
}

export default AppStore
