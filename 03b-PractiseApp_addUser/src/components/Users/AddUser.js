import {useState, useRef} from "react"
import ErrorModal from "../UI/ErrorModal"
import Card from "../UI/Card"
import Button from "../UI/Button"
import classes from "./AddUser.module.css"

const AddUser = (props) => {
  const nameInputRef = useRef()
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age"
      });
      return;
    }
    if (enteredUserAge.trim() < 1){
      setError({
        title: "Invalid age",
        message:"Please enter an age greater than 0"
      })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge)
    nameInputRef.current.value = ""
    ageInputRef.current.value = "";
  }

   const errorHandler = () => {
     setError(null)
   }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser