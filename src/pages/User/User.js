import React, { useEffect } from "react";
import "./User.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Form } from './forms/Form';

const User1 = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  console.log("gsdefwsdgsdgsdefg");
  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  const clickuserdata = (id) => {
    navigate("/user-Post", { state: { id: id } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Main">
      <table className="usertable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>EMail</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.street +
                  "," +
                  user.address.suite +
                  "," +
                  user.address.city +
                  "," +
                  user.address.zipcode}
              </td>
              <td>
                <a
                  className="viewbutton"
                  onClick={() => clickuserdata(user.id)}
                >
                  View Post
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <Link to="/Form" > Form </Link>
    </div>
  );
};
export default User1;
