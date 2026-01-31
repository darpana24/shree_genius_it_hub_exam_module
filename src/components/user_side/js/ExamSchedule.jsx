import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { examSchedule } from './mockData';
import '../css/ExamSchedule.css';

const ExamSchedule = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [filterSubject, setFilterSubject] = useState('all');

  const subjects = ['all', 'JavaScript', 'React.js', 'DBMS'];

  const getFilteredSchedule = () => {
    if (filterSubject === 'all') return examSchedule;
    return examSchedule.filter(exam => exam.subject === filterSubject);
  };

  const filteredSchedule = getFilteredSchedule();

  const getSubjectIcon = (subject) => {
    if (subject === 'JavaScript') return '🟨';
    if (subject === 'React.js') return '⚛️';
    return '🗄️';
  };

  const getDaysUntil = (dateString) => {
    const examDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    examDate.setHours(0, 0, 0, 0);
    
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Completed';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `In ${diffDays} days`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="schedule-container">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <button onClick={() => navigate('/dashboard')} className="back-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Dashboard
          </button>
          <div className="user-badge">
            <div className="user-avatar-small">
              {user.name.charAt(0)}
            </div>
            <span>{user.name}</span>
          </div>
        </div>
      </header>

      <div className="schedule-main">
        {/* Title Section */}
        <div className="page-intro">
          <h1 className="page-title">Exam Schedule</h1>
          <p className="page-subtitle">Plan ahead and stay prepared for upcoming assessments</p>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <label className="filter-label">Filter by Subject:</label>
          <div className="subject-filters">
            {subjects.map(subject => (
              <button
                key={subject}
                className={`subject-filter-btn ${filterSubject === subject ? 'active' : ''}`}
                onClick={() => setFilterSubject(subject)}
              >
                {subject === 'all' ? 'All Subjects' : subject}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Table */}
        <div className="schedule-table-container">
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Subject</th>
                <th>Exam Type</th>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((exam, index) => (
                <tr key={exam.id} style={{ animationDelay: `${index * 0.05}s` }}>
                  <td>
                    <span className="course-text">{exam.course}</span>
                  </td>
                  <td>
                    <div className="subject-cell">
                      <span className="subject-icon">{getSubjectIcon(exam.subject)}</span>
                      <span className="subject-name">{exam.subject}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`exam-type-badge ${exam.examType === 'Practice Test' ? 'practice' : 'final'}`}>
                      {exam.examType}
                    </span>
                  </td>
                  <td>
                    <div className="date-cell">
                      <div className="date-primary">
                        {new Date(exam.date).toLocaleDateString('en-US', { 
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="date-secondary">
                        {new Date(exam.date).toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="time-text">{exam.time}</span>
                  </td>
                  <td>
                    <span className="duration-text">{exam.duration}</span>
                  </td>
                  <td>
                    <span className={`status-pill ${getDaysUntil(exam.date) === 'Today' ? 'today' : 'upcoming'}`}>
                      {getDaysUntil(exam.date)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Upcoming Exams Cards */}
        <div className="upcoming-section">
          <h2 className="section-title">Next 3 Upcoming Exams</h2>
          <div className="upcoming-grid">
            {filteredSchedule.slice(0, 3).map((exam, index) => (
              <div 
                key={exam.id} 
                className="upcoming-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-header">
                  <div className="subject-badge">
                    <span className="badge-icon">{getSubjectIcon(exam.subject)}</span>
                    <span className="badge-text">{exam.subject}</span>
                  </div>
                  <span className={`countdown-badge ${getDaysUntil(exam.date) === 'Today' ? 'urgent' : ''}`}>
                    {getDaysUntil(exam.date)}
                  </span>
                </div>
                
                <h3 className="card-title">{exam.examType}</h3>
                
                <div className="card-details">
                  <div className="detail-row">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6667 1.33325V3.99992M5.33333 1.33325V3.99992M2 6.66658H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{formatDate(exam.date)}</span>
                  </div>
                  
                  <div className="detail-row">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4V8L10.6667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{exam.time} • {exam.duration}</span>
                  </div>
                </div>

                <button 
                  className="prepare-btn"
                  onClick={() => navigate('/start-test')}
                >
                  Prepare Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="notes-section">
          <h3 className="notes-title">📌 Important Notes</h3>
          <ul className="notes-list">
            <li>Please join the exam 5 minutes before the scheduled time</li>
            <li>Ensure you have a stable internet connection before starting</li>
            <li>Practice tests can be attempted multiple times for preparation</li>
            <li>Final exams can only be attempted once - make sure you're prepared</li>
            <li>Contact support if you face any technical issues during the exam</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
