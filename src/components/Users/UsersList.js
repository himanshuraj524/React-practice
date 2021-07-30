import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';
//function used to show the users in the list form
const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => <li key={user.id}>{user.name} ({user.age} Years old.)</li>)}
            </ul>
        </Card>
    )
};

export default UsersList;