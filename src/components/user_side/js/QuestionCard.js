export default function QuestionCard({ question, index, total, answer, setAnswer, next, prev, mode }) {
return (
<section className="question">
<h3>Question {index + 1} of {total}</h3>
<p>{question.text}</p>


{question.options.map((o, i) => (
  <div
    key={i}
    className={answer === i ? "option selected" : "option"}
    onClick={() => setAnswer(i)}
  >
    {o}
  </div>
))}


{mode === "practice" && answer !== undefined && (
<div className={answer === question.correct ? "correct" : "incorrect"}>
{answer === question.correct ? "Correct" : "Incorrect"}
</div>
)}


<div className="nav">
<button disabled={index === 0} onClick={prev}>Previous</button>
<button onClick={next}>{index === total - 1 ? "Finish" : "Next"}</button>
</div>
</section>
);
}