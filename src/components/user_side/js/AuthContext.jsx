import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for stored user on mount - DISABLED to always show login first
  useEffect(() => {
    // Don't auto-login from localStorage
    // Users must login each time for security
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Store in sessionStorage instead of localStorage (clears on browser close)
    sessionStorage.setItem('examPortalUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('examPortalUser');
    localStorage.removeItem('examPortalUser'); // Clear old localStorage too
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
