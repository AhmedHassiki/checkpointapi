import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="user-list">
      <h1 className="header">List of Users</h1>
      <ul h1 className="unordered">
        {listOfUsers.map((user) => (
          <li key={user.id} className="list">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
