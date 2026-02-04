import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/user_side/js/Sidebar';
import Header from './components/user_side/js/Header';
import DashboardHome from './components/user_side/js/DashboardHome';
import ScheduleView from './components/user_side/js/ScheduleView';
//import TestStart from './components/user_side/js/TestStart';
import Login from './components/user_side/js/Login';
import ExamInstructions from './components/user_side/js/ExamInstructions';
import ExamForm from './components/user_side/js/ExamForm';
import ExamLayout from './components/user_side/js/ExamLayout';
import SetupScreen from './components/user_side/js/SetupScreen';
import StudentTable from './components/user_side/js/StudentTable';

function App() {
    // State starts as null, so Login page is the entry point
    const [user, setUser] = useState(null);
    const [page, setPage] = useState('login');
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [testStep, setTestStep] = useState("start");
    const [setup, setSetup] = useState(null);
// values: "start" | "ready" | "instructions" | "setup" | "exam"

    // 1. Logic to handle login
  const users = [
    { username: "Admin", password: "admin123", role: "admin" },
    { username: "Aparna", password: "111", role: "student" },
    { username: "Nirja", password: "222", role: "student" }
  ];

  const handleLogin = (username, password) => {
    const foundUser = users.find(
      u => u.username === username && u.password === password
    );

    if (!foundUser) {
      alert("Invalid Username or Password");
      return;
    }

    setUser(foundUser);
    setPage('dashboard');
  };

    // 2. Logic to handle logout (returns user to login page)
    const handleLogout = () => {
        setUser(null);
        setPage('login');
        setActiveTab('dashboard'); // Reset tab for next login
    };

    // --- Conditional Routing ---
    // If user is not logged in, ONLY show the login page
    if (!user || page === 'login') {
        return <Login onLogin={handleLogin} />;
    }

    // If logged in, show the Dashboard layout
    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <DashboardHome userName={user.username} />;
            case 'schedule': return <ScheduleView />;
            case 'marksheet': return <StudentTable />;
            case 'test': 
                if (testStep === "start") {
                    return (
                        <ExamForm
                            onCancel={() => setActiveTab("dashboard")}
                            onStart={() => setTestStep("ready")}
                        />
                    );
                }

                if (testStep === "ready") {
                    return (
                        <div className="p-6 text-center">
                            <h2 className="text-xl font-bold">Get Ready for Exam 🚀</h2>
                            <p className="text-gray-500 mt-2">
                                <button onClick={() => setTestStep("instructions")}>Start Exam</button>
                            </p>
                        </div>
                    );
                }

                if (testStep === "instructions") {
                    return (
                        <ExamInstructions
                            onBack={() => setTestStep("ready")}
                            onProceed={() => setTestStep("setup")}
                        />
                    );
                }

                if (testStep === "setup") {
                    return (
                        <SetupScreen
                            mode={setup}
                            setMode={setSetup}
                            start={() => setTestStep("exam")}
                        />
                    );
                }

                if (testStep === "exam") {
                    return (
                        <ExamLayout
                            mode={setup || "exam"}
                            onFinish={() => setActiveTab("dashboard")}
                            onRedirect={() => setTestStep("setup")}
                            onRestart={() => setTestStep("setup")}
                        />
                    );
                }

                return null;

                    default: return <DashboardHome userName={user.username} />;
        }
    };
     


    return (
        <div className="main-layout-container">
            <Sidebar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                isOpen={isSidebarOpen} 
                closeSidebar={() => setSidebarOpen(false)} 
            />
            
            <div className="main-content">
                <Header 
                    userName={user.username} 
                    onLogout={handleLogout} 
                    toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
                />
                
                <div className="dashboard-container">
                    {renderContent()}
                </div>
            </div>
            
            <footer>
                <div className="footer-content">
                    <span>{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</span>
                    <span>|</span>
                    <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </footer>
        </div>
    );
}

export default App;