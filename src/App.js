import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { UserList } from "./features/users/UserList";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUsers";
import { Receipe } from "./features/receipe/Receipe";
import Home from "./pages/Home";
import Post from "./features/posts/Post";

function App(id) {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>

        <Route path="/user-list" element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUser />}></Route>
        <Route path="/receipe" element={<Receipe />}></Route>
        <Route path="/post" element={<Post />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
