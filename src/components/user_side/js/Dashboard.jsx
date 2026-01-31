import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getUserResults, examSchedule } from './mockData';
import "../css/Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [results, setResults] = useState([]);
  const [upcomingExams, setUpcomingExams] = useState([]);

  useEffect(() => {
    // Load user results
    const userResults = getUserResults(user.id);
    setResults(userResults);

    // Get next 3 upcoming exams
    const upcoming = examSchedule.slice(0, 3);
    setUpcomingExams(upcoming);
  }, [user.id]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const dashboardCards = [
    {
      title: 'Start Test',
      description: 'Begin your practice or final exam',
      icon: '📝',
      color: 'blue',
      path: '/start-test'
    },
    {
      title: 'View Results',
      description: 'Check your exam scores and performance',
      icon: '📊',
      color: 'purple',
      path: '/results'
    },
    {
      title: 'Exam Schedule',
      description: 'View upcoming exam dates and times',
      icon: '📅',
      color: 'green',
      path: '/schedule'
    }
  ];

  const getPassStatus = (marks) => {
    return marks >= 40 ? 'Pass' : 'Fail';
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <img 
              src="../images/logo.png" 
              alt="Shree Genius IT Hub" 
              className="header-logo"
            />
            <div className="header-text">
              <h1>Exam Portal</h1>
              <p>Full-Stack Development Course</p>
            </div>
          </div>
          <div className="header-right">
            <div className="user-info">
              <div className="user-avatar">
                {user.name.charAt(0)}
              </div>
              <div className="user-details">
                <p className="user-name">{user.name}</p>
                <p className="user-roll">{user.rollNumber}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="logout-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-main">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <h2 className="welcome-title">Welcome back, {user.name.split(' ')[0]}! 👋</h2>
            <p className="welcome-text">Ready to ace your exams? Let's get started with your learning journey.</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-info">
                <p className="stat-label">Tests Completed</p>
                <p className="stat-value">{results.length}</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <p className="stat-label">Average Score</p>
                <p className="stat-value">
                  {results.length > 0 
                    ? Math.round(results.reduce((acc, r) => acc + r.marks, 0) / results.length)
                    : 0}%
                </p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏰</div>
              <div className="stat-info">
                <p className="stat-label">Upcoming Exams</p>
                <p className="stat-value">{examSchedule.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="action-section">
          <h3 className="section-title">Quick Actions</h3>
          <div className="cards-grid">
            {dashboardCards.map((card, index) => (
              <div 
                key={index}
                className={`action-card ${card.color}`}
                onClick={() => navigate(card.path)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon">{card.icon}</div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-description">{card.description}</p>
                <div className="card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="dashboard-grid">
          {/* Recent Results */}
          <div className="dashboard-section">
            <div className="section-header">
              <h3 className="section-title">Recent Results</h3>
              {results.length > 0 && (
                <button 
                  className="view-all-btn"
                  onClick={() => navigate('/results')}
                >
                  View All
                </button>
              )}
            </div>
            {results.length > 0 ? (
              <div className="results-list">
                {results.slice(-3).reverse().map((result, index) => (
                  <div key={index} className="result-item">
                    <div className="result-subject">
                      <div className="subject-icon">
                        {result.subject === 'JavaScript' ? '🟨' : 
                         result.subject === 'React' ? '⚛️' : '🗄️'}
                      </div>
                      <div className="subject-info">
                        <p className="subject-name">{result.subject}</p>
                        <p className="exam-type">{result.examType}</p>
                      </div>
                    </div>
                    <div className="result-score">
                      <span className={`marks ${getPassStatus(result.marks).toLowerCase()}`}>
                        {result.marks}%
                      </span>
                      <span className={`status ${getPassStatus(result.marks).toLowerCase()}`}>
                        {getPassStatus(result.marks)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-icon">📝</div>
                <p>No results yet</p>
                <button 
                  className="start-test-btn"
                  onClick={() => navigate('/start-test')}
                >
                  Start Your First Test
                </button>
              </div>
            )}
          </div>

          {/* Upcoming Exams */}
          <div className="dashboard-section">
            <div className="section-header">
              <h3 className="section-title">Upcoming Exams</h3>
              <button 
                className="view-all-btn"
                onClick={() => navigate('/schedule')}
              >
                View All
              </button>
            </div>
            <div className="exams-list">
              {upcomingExams.map((exam, index) => (
                <div key={index} className="exam-item">
                  <div className="exam-date">
                    <div className="date-box">
                      <span className="date-day">
                        {new Date(exam.date).getDate()}
                      </span>
                      <span className="date-month">
                        {new Date(exam.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </div>
                  </div>
                  <div className="exam-details">
                    <p className="exam-subject">{exam.subject}</p>
                    <p className="exam-info">{exam.examType}</p>
                    <p className="exam-time">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 3.5V7L9.33333 8.16667M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {exam.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
