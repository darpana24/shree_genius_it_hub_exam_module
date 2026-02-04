import React, { useState, useEffect } from "react";

import QuestionCard from "./QuestionCard";
import Palette from "./Palette";
import ResultModal from "./ResultModal";

// if questions are in separate file
import questions from "./questions";

export default function ExamLayout({ mode, onRedirect, onRestart }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState(new Set([0]));
  const [submitted, setSubmitted] = useState(false);
  
  const PRACTICE_TIME = 40 * 60; 
  const FINAL_TIME = 20 * 60;   
  const [time, setTime] = useState(
    mode === "practice" ? PRACTICE_TIME : FINAL_TIME
  );

  // ⏱ TIMER + AUTO SUBMIT
  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setSubmitted(true); // auto submit when time ends
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  // ✅ SCORE
  const score = Object.keys(answers).filter(
    (i) => answers[i] === questions[i].correct
  ).length;

  // 👉 NEXT QUESTION OR SUBMIT
  const handleNext = () => {
    if (current === questions.length - 1) {
      setSubmitted(true); // auto submit after last question
    } else {
      setVisited(new Set(visited).add(current + 1));
      setCurrent(current + 1);
    }
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="app">
      {/* Timer Display */}
      <div className="timer" style={{ 
        padding: "0.5rem 1rem", 
        background: "#da1d1d", 
        color: "white", 
        borderRadius: "20px", 
        textAlign: "center", 
        margin: "1rem auto", 
        fontWeight: "bold",
        fontSize: "1.1rem"
      }}>
        ⏱️ Time: {formatTime(time)}
      </div>

      <main>
        <QuestionCard
          question={questions[current]}
          index={current}
          total={questions.length}
          answer={answers[current]}
          setAnswer={(o) =>
            setAnswers({ ...answers, [current]: o })
          }
          next={handleNext}
          prev={() => setCurrent(current - 1)}
          mode={mode}
        />

        <Palette
          questions={questions}
          current={current}
          answers={answers}
          visited={visited}
          jump={setCurrent}
          submit={() => setSubmitted(true)}
        />
      </main>

      {submitted && (
        <ResultModal 
          score={score} 
          total={questions.length} 
          onRedirect={onRedirect}
          onRestart={onRestart}
        />
      )}
    </div>
  );
}