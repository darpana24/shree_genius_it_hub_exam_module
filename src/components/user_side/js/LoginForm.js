import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const colors = {
    navy: '#3E438C',
    blue: '#1C8BCC',
    slate: '#7B849B',
    mist: '#C0E5F5',
    bg: '#F9FAFA',
    white: '#FFFFFF'
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Logging in with:", formData);
      // Proceed with API call
    } else {
      setErrors(validationErrors);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '8px',
    borderRadius: '6px',
    border: `1px solid ${colors.slate}`,
    backgroundColor: colors.white,
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: colors.navy,
    color: colors.white,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={{ 
      backgroundColor: colors.bg, 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif' 
    }}>
      <div style={{ 
        backgroundColor: colors.white, 
        padding: '40px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
        width: '100%', 
        maxWidth: '400px',
        borderTop: `6px solid ${colors.navy}` 
      }}>
        <h2 style={{ color: colors.navy, textAlign: 'center', marginBottom: '8px' }}>Welcome Back</h2>
        <p style={{ color: colors.slate, textAlign: 'center', marginBottom: '24px' }}>Please enter your details</p>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: colors.navy, marginBottom: '5px', fontWeight: '500' }}>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              style={{...inputStyle, borderColor: errors.username ? '#d32f2f' : colors.mist}}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
            {errors.username && <small style={{ color: '#d32f2f' }}>{errors.username}</small>}
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: colors.navy, marginBottom: '5px', fontWeight: '500' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                style={{...inputStyle, borderColor: errors.password ? '#d32f2f' : colors.mist}}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ 
                  position: 'absolute', right: '10px', top: '12px', background: 'none', border: 'none', color: colors.blue, cursor: 'pointer' 
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <small style={{ color: '#d32f2f' }}>{errors.password}</small>}
          </div>

          

          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default LoginPage;