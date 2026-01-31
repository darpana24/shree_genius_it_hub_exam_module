import React, { useState, useEffect } from "react";

import Header from "./Header";
import QuestionCard from "./QuestionCard";
import Palette from "./Palette";
import ResultModal from "./ResultModal";

// if questions are in separate file
import questions from "./questions";

export default function ExamLayout({ mode }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [visited, setVisited] = useState(new Set([0]));
 // const [time, setTime] = useState(mode === "practice" ? 3600 : 1200);
  const [submitted, setSubmitted] = useState(false);
const PRACTICE_TIME = 40 * 60; // 20 minutes
const FINAL_TIME = 20 * 60;   // 30 minutes
const [time, setTime] = useState(
  mode === "practice" ? PRACTICE_TIME : FINAL_TIME
);
useEffect(() => {
  setTime(mode === "practice" ? PRACTICE_TIME : FINAL_TIME);
}, [mode, PRACTICE_TIME, FINAL_TIME]);


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

  return (
    <div className="app">
      <Header time={time} />

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
        <ResultModal score={score} total={questions.length} />
      )}
    </div>
  );
}
