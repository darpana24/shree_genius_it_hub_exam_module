import React, { useState } from 'react';
import '../css/style.css'

const LoginForm = ({ onLogin, onShowRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login logic
    if (username === 'user' && password === 'pass') {
      onLogin('user');
    } else {
      onLogin('exam');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
