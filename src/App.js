import React, { Fragment, useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersLits from './components/Users/UsersList';

function App() {
  // state for userlist
  const [usersList, setUsersList] = useState([]);

  // function for adding the users into an object.
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id:Math.random().toString()}];
    })
  }

  return (
    <Fragment> 
      <AddUser onAddUser={addUserHandler} />
      <UsersLits users={usersList} />
    </Fragment>
  );
}

export default App;
