import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../css/StartTest.css';

const StartTest = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const subjects = [
    {
      id: 'JavaScript',
      name: 'JavaScript',
      icon: '🟨',
      description: 'Test your JavaScript fundamentals and advanced concepts',
      color: '#F7DF1E'
    },
    {
      id: 'React',
      name: 'React.js',
      icon: '⚛️',
      description: 'Evaluate your React.js component and hooks knowledge',
      color: '#61DAFB'
    },
    {
      id: 'DBMS',
      name: 'Database Management',
      icon: '🗄️',
      description: 'Assess your DBMS and SQL expertise',
      color: '#4DB33D'
    }
  ];

  const examTypes = [
    {
      id: 'practice',
      name: 'Practice Test',
      duration: '30 minutes',
      questions: 10,
      description: 'Sharpen your skills with a practice round'
    },
    {
      id: 'final',
      name: 'Final Exam',
      duration: '60 minutes',
      questions: 20,
      description: 'The official assessment that counts'
    }
  ];

  const handleStartExam = () => {
    if (selectedSubject && selectedType) {
      navigate(`/exam/${selectedSubject}/${selectedType}`);
    }
  };

  return (
    <div className="start-test-container">
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

      <div className="start-test-main">
        {/* Title Section */}
        <div className="test-intro">
          <h1 className="page-title">Start Your Exam</h1>
          <p className="page-subtitle">Choose your subject and exam type to begin</p>
        </div>

        {/* Subject Selection */}
        <div className="selection-section">
          <h2 className="selection-title">
            <span className="step-number">1</span>
            Select Subject
          </h2>
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className={`subject-card ${selectedSubject === subject.id ? 'selected' : ''}`}
                onClick={() => setSelectedSubject(subject.id)}
              >
                <div className="subject-icon" style={{ backgroundColor: subject.color + '20' }}>
                  <span style={{ filter: 'grayscale(0%)' }}>{subject.icon}</span>
                </div>
                <h3 className="subject-name">{subject.name}</h3>
                <p className="subject-description">{subject.description}</p>
                <div className="selection-indicator">
                  {selectedSubject === subject.id && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exam Type Selection */}
        <div className="selection-section">
          <h2 className="selection-title">
            <span className="step-number">2</span>
            Select Exam Type
          </h2>
          <div className="exam-types-grid">
            {examTypes.map((type) => (
              <div
                key={type.id}
                className={`exam-type-card ${selectedType === type.id ? 'selected' : ''}`}
                onClick={() => setSelectedType(type.id)}
              >
                <div className="exam-type-header">
                  <h3 className="exam-type-name">{type.name}</h3>
                  <div className="selection-indicator">
                    {selectedType === type.id && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="8" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                </div>
                <p className="exam-type-description">{type.description}</p>
                <div className="exam-type-details">
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 4.5V8H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{type.duration}</span>
                  </div>
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 5C2 4.44772 2.44772 4 3 4H13C13.5523 4 14 4.44772 14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V5Z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 7H11M5 10H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M5 2V4M11 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>{type.questions} Questions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <div className="action-section">
          <button
            className={`start-exam-button ${!selectedSubject || !selectedType ? 'disabled' : ''}`}
            onClick={handleStartExam}
            disabled={!selectedSubject || !selectedType}
          >
            {!selectedSubject || !selectedType ? (
              'Select Subject and Exam Type'
            ) : (
              <>
                Start Exam
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </button>
          {selectedSubject && selectedType && (
            <p className="start-note">
              ⏱️ Timer will start as soon as you begin the exam. Good luck!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartTest;
