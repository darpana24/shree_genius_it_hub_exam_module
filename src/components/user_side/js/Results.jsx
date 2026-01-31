import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getUserResults } from './mockData';
import '../css/Results.css';

const Results = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState('all'); // all, practice, final
  const [sortBy, setSortBy] = useState('recent'); // recent, oldest, highest, lowest

  useEffect(() => {
    loadResults();
  }, [user.id]);

  const loadResults = () => {
    const userResults = getUserResults(user.id);
    setResults(userResults);
  };

  const getFilteredResults = () => {
    let filtered = [...results];

    // Apply filter
    if (filter === 'practice') {
      filtered = filtered.filter(r => r.examType === 'Practice Test');
    } else if (filter === 'final') {
      filtered = filtered.filter(r => r.examType === 'Final Exam');
    }

    // Apply sorting
    if (sortBy === 'recent') {
      filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } else if (sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } else if (sortBy === 'highest') {
      filtered.sort((a, b) => b.marks - a.marks);
    } else if (sortBy === 'lowest') {
      filtered.sort((a, b) => a.marks - b.marks);
    }

    return filtered;
  };

  const filteredResults = getFilteredResults();

  const getSubjectIcon = (subject) => {
    if (subject === 'JavaScript') return '🟨';
    if (subject === 'React') return '⚛️';
    return '🗄️';
  };

  const getPassStatus = (marks) => {
    return marks >= 40 ? 'Pass' : 'Fail';
  };

  const calculateStats = () => {
    if (results.length === 0) return { average: 0, highest: 0, passed: 0 };
    
    const average = Math.round(results.reduce((sum, r) => sum + r.marks, 0) / results.length);
    const highest = Math.max(...results.map(r => r.marks));
    const passed = results.filter(r => r.marks >= 40).length;
    
    return { average, highest, passed };
  };

  const stats = calculateStats();

  return (
    <div className="results-container">
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

      <div className="results-main">
        {/* Title Section */}
        <div className="page-intro">
          <h1 className="page-title">Results & Marksheet</h1>
          <p className="page-subtitle">Track your performance and progress</p>
        </div>

        {/* Stats Cards */}
        {results.length > 0 && (
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-icon blue">📊</div>
              <div className="stat-content">
                <p className="stat-label">Average Score</p>
                <p className="stat-value">{stats.average}%</p>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon green">🏆</div>
              <div className="stat-content">
                <p className="stat-label">Highest Score</p>
                <p className="stat-value">{stats.highest}%</p>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon purple">✅</div>
              <div className="stat-content">
                <p className="stat-label">Tests Passed</p>
                <p className="stat-value">{stats.passed}/{results.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Filters and Sort */}
        {results.length > 0 && (
          <div className="controls-bar">
            <div className="filter-group">
              <label>Filter:</label>
              <div className="filter-buttons">
                <button
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button
                  className={filter === 'practice' ? 'active' : ''}
                  onClick={() => setFilter('practice')}
                >
                  Practice
                </button>
                <button
                  className={filter === 'final' ? 'active' : ''}
                  onClick={() => setFilter('final')}
                >
                  Final
                </button>
              </div>
            </div>
            <div className="sort-group">
              <label>Sort by:</label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="recent">Most Recent</option>
                <option value="oldest">Oldest First</option>
                <option value="highest">Highest Score</option>
                <option value="lowest">Lowest Score</option>
              </select>
            </div>
          </div>
        )}

        {/* Results Table */}
        {filteredResults.length > 0 ? (
          <div className="results-table-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Exam Type</th>
                  <th>Score</th>
                  <th>Status</th>
                  <th>Questions</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {filteredResults.map((result, index) => (
                  <tr key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    <td>
                      <div className="subject-cell">
                        <span className="subject-icon">{getSubjectIcon(result.subject)}</span>
                        <span className="subject-name">{result.subject}</span>
                      </div>
                    </td>
                    <td>
                      <span className={`exam-badge ${result.examType === 'Practice Test' ? 'practice' : 'final'}`}>
                        {result.examType}
                      </span>
                    </td>
                    <td>
                      <span className={`score-badge ${getPassStatus(result.marks).toLowerCase()}`}>
                        {result.marks}%
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${getPassStatus(result.marks).toLowerCase()}`}>
                        {getPassStatus(result.marks)}
                      </span>
                    </td>
                    <td>
                      <span className="attempted-text">
                        {result.attempted}/{result.totalQuestions}
                      </span>
                    </td>
                    <td>{result.date}</td>
                    <td>{result.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : results.length > 0 ? (
          <div className="no-results">
            <div className="empty-icon">🔍</div>
            <p>No results found for the selected filter</p>
            <button 
              className="reset-filter-btn"
              onClick={() => setFilter('all')}
            >
              Show All Results
            </button>
          </div>
        ) : (
          <div className="no-results">
            <div className="empty-icon">📝</div>
            <h3>No Results Yet</h3>
            <p>You haven't taken any exams yet. Start your first test to see results here!</p>
            <button 
              className="start-test-btn"
              onClick={() => navigate('/start-test')}
            >
              Start Your First Test
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
