import React, { useState } from "react";
import Login from "./components/user_side/js/Login";
import Register from "./components/user_side/js/Register";
import AdminDashboard from "./components/user_side/js/AdminDashboard";
import Exam from "./components/user_side/js/Exam";

function App() {
  const [page, setPage] = useState("login");

  
  const users = [
    { username: "Admin", password: "admin123", role: "admin" },
    { username: "Aparna", password: "111", role: "student" },
    { username: "Nirja", password: "222", role: "student" }
  ];

  const handleLogin = (username, password) => {
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      alert("Invalid Username or Password");
      return;
    }

    if (user.role === "admin") {
      setPage("admin");
    } else {
      setPage("exam");
    }
  };

  return (
    <>
      {page === "login" && (
        <Login
          onLogin={handleLogin}
          onRegister={() => setPage("register")}
        />
      )}

      {page === "register" && <Register onBack={() => setPage("login")} />}
      {page === "admin" && <AdminDashboard />}
      {page === "exam" && <Exam />}
    </>
  );
}

export default App;