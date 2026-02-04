import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import questions from './questions';
import ResultModal from './ResultModal';

const Quiz = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        score++;
      }
    });
    return score;
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <ResultModal
        score={calculateScore()}
        total={questions.length}
        onRestart={handleRestart}
        onFinish={onFinish}
      />
    );
  }

  return (
    <div className="quiz-container">
      <QuestionCard
        question={questions[currentQuestion]}
        index={currentQuestion}
        total={questions.length}
        answer={answers[currentQuestion]}
        setAnswer={handleAnswer}
        next={handleNext}
        prev={handlePrev}
        mode="exam"
      />
    </div>
  );
};

export default Quiz;
