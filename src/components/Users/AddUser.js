import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import cssClasses from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  // useState for username.
  const [enteredUsername, setEnteredUsername] = useState("");
  // useState for userage
  const [enteredUserage, setEnteredUserage] = useState("");
  // userState for Modal
  const [error, setError] = useState();

  // useradd handler
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserage < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredUserage);
    setEnteredUsername("");
    setEnteredUserage("");
  };

  // user name input handler
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  // user age input handler
  const userageChangeHandler = (event) => {
    setEnteredUserage(event.target.value);
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
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (In Years)</label>
          <input
            id="age"
            type="number"
            value={enteredUserage}
            onChange={userageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
