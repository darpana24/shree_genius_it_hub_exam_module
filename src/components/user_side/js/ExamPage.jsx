import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { examQuestions, saveResult } from './mockData';
import '../css/ExamPage.css';

const ExamPage = () => {
  const { subject, type } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [questions] = useState(examQuestions[subject][type]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(type === 'practice' ? 1800 : 3600); // 30 or 60 minutes in seconds
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleSubmit();
    }
  }, [timeLeft, showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const handleSubmit = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    
    // Save result
    const result = {
      userId: user.id,
      studentName: user.name,
      subject: subject,
      examType: type === 'practice' ? 'Practice Test' : 'Final Exam',
      marks: finalScore,
      totalQuestions: questions.length,
      attempted: Object.keys(answers).length,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      timestamp: new Date().toISOString()
    };
    
    saveResult(result);
    setShowResults(true);
  };

  const handleConfirmSubmit = () => {
    setShowConfirmation(false);
    handleSubmit();
  };

  if (showResults) {
    return (
      <div className="exam-container">
        <div className="results-modal">
          <div className="results-content">
            <div className="success-icon">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="38" stroke="#4CAF50" strokeWidth="4"/>
                <path d="M25 40L35 50L55 30" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="results-title">Exam Submitted Successfully! ✅</h2>
            <p className="results-subtitle">Great job completing the exam</p>
            
            <div className="results-stats">
              <div className="result-stat-card">
                <p className="stat-label">Your Score</p>
                <p className={`stat-value ${score >= 40 ? 'pass' : 'fail'}`}>{score}%</p>
                <p className={`stat-status ${score >= 40 ? 'pass' : 'fail'}`}>
                  {score >= 40 ? 'Pass ✓' : 'Fail ✗'}
                </p>
              </div>
              <div className="result-stat-card">
                <p className="stat-label">Questions Attempted</p>
                <p className="stat-value">{Object.keys(answers).length}/{questions.length}</p>
              </div>
              <div className="result-stat-card">
                <p className="stat-label">Subject</p>
                <p className="stat-value-text">{subject}</p>
              </div>
            </div>

            <div className="results-actions">
              <button 
                className="btn-secondary"
                onClick={() => navigate('/results')}
              >
                View All Results
              </button>
              <button 
                className="btn-primary"
                onClick={() => navigate('/dashboard')}
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="exam-container">
      {/* Exam Header */}
      <div className="exam-header">
        <div className="exam-info">
          <h2 className="exam-subject">{subject} - {type === 'practice' ? 'Practice Test' : 'Final Exam'}</h2>
          <div className="question-counter">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
        <div className={`timer ${timeLeft < 300 ? 'warning' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="M10 5V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Question Section */}
      <div className="question-section">
        <div className="question-card">
          <p className="question-text">{question.question}</p>
          
          <div className="options-grid">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`option-card ${answers[currentQuestion] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="option-radio">
                  <div className="radio-outer">
                    {answers[currentQuestion] === index && <div className="radio-inner"></div>}
                  </div>
                </div>
                <span className="option-label">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question Navigation */}
        <div className="question-nav">
          <div className="nav-buttons">
            <button
              className="nav-button"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </button>
            
            {currentQuestion === questions.length - 1 ? (
              <button
                className="submit-button"
                onClick={() => setShowConfirmation(true)}
              >
                Submit Exam
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <button
                className="nav-button next"
                onClick={handleNext}
              >
                Next
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>

          {/* Question Indicators */}
          <div className="question-indicators">
            {questions.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentQuestion ? 'current' : ''} ${answers[index] !== undefined ? 'answered' : ''}`}
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Submit Exam?</h3>
            <p className="modal-text">
              You have attempted {Object.keys(answers).length} out of {questions.length} questions.
              {Object.keys(answers).length < questions.length && (
                <span className="warning-text">
                  <br /><br />⚠️ You have unanswered questions. Are you sure you want to submit?
                </span>
              )}
            </p>
            <div className="modal-actions">
              <button
                className="btn-secondary"
                onClick={() => setShowConfirmation(false)}
              >
                Continue Exam
              </button>
              <button
                className="btn-primary"
                onClick={handleConfirmSubmit}
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPage;
