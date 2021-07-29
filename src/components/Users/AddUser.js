import React ,{useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import cssClasses from './AddUser.module.css';

const AddUser = (props) =>{
    // useState for username.
    const [enteredUsername, setEnteredUsername]=useState('')
    // useState for userage
    const [enteredUserage, setEnteredUserage]=useState('')

    // useradd handler
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredUserage.trim().length === 0){
            return;
        }
        if(+enteredUserage < 1){
            return;
        }
        console.log(enteredUsername,enteredUserage);
        setEnteredUsername('');
        setEnteredUserage('');
    }
    
    // user name input handler
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    // user age input handler
    const userageChangeHandler = (event) => {
        setEnteredUserage(event.target.value)
    }

    return(
    <Card className={cssClasses.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age" >Age (In Years)</label>
        <input id="age" type="number" value={enteredUserage} onChange={userageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    )
};

export default AddUser;