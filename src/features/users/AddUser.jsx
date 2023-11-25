import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { userAdded } from "./usersSlice";
import { useDispatch, useSelector } from "react-redux";

export function AddUser() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const usersId = useSelector((state) => state.users.length);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userAdded({
          id: usersId + 1,
          name,
          email,
        })
      );

      setError(null);
      Navigate("/user-list");
    } else {
      setError("Fill in all fields");
    }
    setName("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label for="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label for="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button className="button-primary" onClick={handleClick}>
            Add user
          </button>
        </div>
      </div>
    </div>
  );
}
