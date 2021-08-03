import React, { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import cssClasses from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  // useRef for username.
  const enteredUsername = useRef();
  // useRef for userage
  const enteredUserage = useRef();
  // userState for Modal
  const [error, setError] = useState();

  // useradd handler
  const addUserHandler = (event) => {
    event.preventDefault();

    // the below variables will store the current values of the objects.
    const userName = enteredUsername.current.value;
    const userAge = enteredUserage.current.value;
    if (
      userName.trim().length === 0 ||
      userAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(userName, userAge);
    // used refs for reset the value but it is not recommended insted you can use useState
    enteredUsername.current.value = '';
    enteredUserage.current.value = '';
  };


  // error handler that will set the error state to null so that the error modal will dissappear
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {/* condition check if error is a thing or not */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={cssClasses.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            ref={enteredUsername}
          />
          <label htmlFor="age">Age (In Years)</label>
          <input
            id="age"
            type="number"
            ref={enteredUserage}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
