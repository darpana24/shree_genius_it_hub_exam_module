
import React from 'react';
import StudentTable from './StudentTable';

function App() {
  return (
    <div>
      <StudentTable />
    </div>
  );
=======
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/user_side/js/Sidebar';
import Header from './components/user_side/js/Header';
import DashboardHome from './components/user_side/js/DashboardHome';
import ScheduleView from './components/user_side/js/ScheduleView';
import TestStart from './components/user_side/js/TestStart';
import Login from './components/user_side/js/Login';
import ExamInstructions from './components/user_side/js/ExamInstructions';

function App() {
    // State starts as null, so Login page is the entry point
    const [user, setUser] = useState(null); 
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
   // const [showInstructions, setShowInstructions] = useState(false);
   const [testStep, setTestStep] = useState("start");
// values: "start" | "instructions" | "exam"

    // 1. Logic to handle login
    const handleLogin = (userName) => {
        setUser({ name: userName });
    };

    // 2. Logic to handle logout (returns user to login page)
    const handleLogout = () => {
        setUser(null);
        setActiveTab('dashboard'); // Reset tab for next login
    };

    // --- Conditional Routing ---
    // If user is not logged in, ONLY show the login page
    if (!user) {
        return <Login onLogin={handleLogin} />;
    }

    // If logged in, show the Dashboard layout
    const renderContent = () => {
        switch(activeTab) {
            case 'dashboard': return <DashboardHome userName={user.name} />;
            case 'schedule': return <ScheduleView />;
            case 'test': 
  if (testStep === "start") {
    return (
      <TestStart
        onCancel={() => setActiveTab("dashboard")}
        onStart={() => setTestStep("instructions")}
      />
    );
  }

  if (testStep === "instructions") {
    return (
      <ExamInstructions
        onBack={() => setTestStep("start")}
        onProceed={() => setTestStep("exam")}
      />
    );
  }

  if (testStep === "exam") {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Exam Started 🚀</h2>
        <p className="text-gray-500 mt-2">
          Load your question component here
        </p>
      </div>
    );
  }

  return null;

                    default: return <DashboardHome userName={user.name} />;
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
                    userName={user.name} 
                    onLogout={handleLogout} 
                    toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
                />
                
                <div className="dashboard-container">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
 main
}

export default App;