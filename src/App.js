import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/user_side/js/AuthContext';
import Login from './components/user_side/js/Login';
import Dashboard from './components/user_side/js/Dashboard';
import StartTest from './components/user_side/js/StartTest';
import ExamPage from './components/user_side/js/ExamPage';
import Results from './components/user_side/js/Results';
import ExamSchedule from './components/user_side/js/ExamSchedule';
import './components/user_side/css/App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// Public Route (redirect to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  return !user ? children : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/start-test" 
              element={
                <ProtectedRoute>
                  <StartTest />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/exam/:subject/:type" 
              element={
                <ProtectedRoute>
                  <ExamPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/results" 
              element={
                <ProtectedRoute>
                  <Results />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/schedule" 
              element={
                <ProtectedRoute>
                  <ExamSchedule />
                </ProtectedRoute>
              } 
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
