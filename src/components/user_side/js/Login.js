import React, { useState } from "react";
import "./style.css";
import logo from "../images/logo1.png"

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />

      <h2>Login </h2>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => onLogin(username, password)}>
        Login
      </button>

      <p className="link" onClick={onRegister}>
        New Student? Register Here
      </p>
    </div>
  );
}

export default Login;