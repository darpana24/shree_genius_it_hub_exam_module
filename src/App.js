import React from "react";
import Question from "./components/user_side/js/Question";
import { quizData } from "./components/user_side/js/quizData";
import "./components/user_side/css/style.css";

function App() {
  return (
    <div>
      <Question questions={quizData} />
    </div>
  );
}

export default App;