import React, { useState } from "react";
import "./Form.css";

function Registration() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`User Registered: ${user.username}`);
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
