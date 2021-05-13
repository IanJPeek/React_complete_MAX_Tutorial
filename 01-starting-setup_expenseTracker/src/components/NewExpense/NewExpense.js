// import {useState} from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
// import Expenses from "../Expenses/Expenses"

const NewExpense = (props) => {

  // const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log("saving!!!")
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    // setIsEditing(false)
    console.log("expenseData", expenseData)
  }

  // const startEditingHandler = (e) => {
  //   e.preventDefault()
  //   setIsEditing(true)
  // }

  // const stopEditingHandler = (e) => {
    // e.preventDefault()
    // setIsEditing(false)
  // }

  return(
    <div className="new-expense">
     {/* <button onClick={startEditingHandler}>Add New Expense</button> */}
      {/* {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} */}
      {/* {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler}/>} */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

    </div>
  )
}

export default NewExpense