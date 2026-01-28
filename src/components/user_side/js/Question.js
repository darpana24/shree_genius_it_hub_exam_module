import React, { useState, useEffect } from "react";
import Options from "./Options";

const Question = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); 
  const [submitted, setSubmitted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Save selected option
  const handleOptionSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: optionIndex,
    });
  };

  // Navigation
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Submit exam
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Format timer HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // If exam submitted → show results
  if (submitted) {
    return (
      <div className="exam-container submitted">
        <h2>Exam Submitted ✅</h2>
        <p>Your answers vs Correct answers:</p>
        <div>
          {questions.map((q, i) => {
            const yourAnswerIndex = selectedAnswers[i];
            const yourAnswerLetter =
              yourAnswerIndex !== undefined
                ? String.fromCharCode(65 + yourAnswerIndex)
                : "Not Answered";
            const correctAnswerLetter = String.fromCharCode(65 + q.correct);
            return (
              <p key={i}>
                Q{i + 1} ({q.course}): Your Answer → {yourAnswerLetter}, Correct Answer → {correctAnswerLetter}
              </p>
            );
          })}
        </div>
      </div>
    );
  }

  // Show current question
  const currentQuestion = questions[currentIndex];

  return (
    <div className="exam-container">
      <h3>
        Question {currentIndex + 1} of {questions.length}
      </h3>
      <p className="question-text">{currentQuestion.text}</p>
      <p><em>Question from {currentQuestion.course} course</em></p>

      <Options
        options={currentQuestion.options}
        selected={selectedAnswers[currentIndex]}
        onSelect={handleOptionSelect}
      />

      <div className="button-group">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
        >
          Next
        </button>
        <button onClick={handleSubmit}>Submit Exam</button>
      </div>

      <div className="timer">⏳ Time Left: {formatTime(timeLeft)}</div>
    </div>
  );
};

export default Question;