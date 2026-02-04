import React, { useState } from "react";
import "./style.css";

function Register({ onBack }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    address: ""
  });

  const [success, setSuccess] = useState(false);

  const handleRegister = () => {
    if (
      form.username &&
      form.email &&
      form.password &&
      form.address
    ) {
      setSuccess(true);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>

      {!success ? (
        <>
          <input placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />

          <input placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input type="password" placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <input placeholder="Address"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <button onClick={handleRegister}>Register</button>
          <button className="back" onClick={onBack}>Back to Login</button>
        </>
      ) : (
        <>
          <h3 style={{ color: "green" }}>✔ Register Successful</h3>
          <button onClick={onBack}>Go to Login</button>
        </>
      )}
    </div>
  );
}

export default Register;