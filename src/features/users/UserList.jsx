import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { EditUser } from "./EditUsers";

export function UserList() {
  const users = useSelector((state) => state.users);

  const navigate = useNavigate();

  const navigateToEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD User app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <button className="button-primary" path="/add-user">
            Add user
          </button>
        </div>
      </div>
      <div className="row">
        <table class="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button>Delete</button>
                  <Link to={`/edit-user/${id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
