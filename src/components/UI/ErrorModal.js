import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// Backdrop for adding it in the index file by using portal
const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}></div>
  )
};

// ModalOverlay for adding it in the index file by using portal
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.content}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  )
};
// This is error modal component
const ErrorModal = (props) => {
  // error modal that will appera when a user submits an invalid input values.
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
    </Fragment>
  );
};

export default ErrorModal;
