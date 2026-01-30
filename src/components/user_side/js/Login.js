
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
=======
import React, { useState } from 'react';
import Logo from '../images/logo.jpeg';
const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({ name: '', studentId: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation matching the original script
        if (formData.name && formData.studentId && formData.password) {
            onLogin(formData.name);
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="card login-box">
                <img 
                    src={Logo}
                    alt="Logo" 
                    style={{ width: '100px', marginBottom: '1rem' }}
                />
                <h1 className="text-2xl font-bold mb-1">Welcome Back</h1>
                <p className="text-gray-500 mb-6 text-sm tracking-wider uppercase">Sky is the Limit!</p>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Full Name" 
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})} 
                    />
                    <input 
                        placeholder="Student ID" 
                        value={formData.studentId}
                        onChange={e => setFormData({...formData, studentId: e.target.value})} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={e => setFormData({...formData, password: e.target.value})} 
                    />
                    <button type="submit" className="btn btn-primary w-full justify-center">
                        Login to Portal
                    </button>
                </form>
            </div>
        </div>
    );
};


export default Login;