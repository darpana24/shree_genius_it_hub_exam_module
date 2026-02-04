
export default function Palette({ questions, current, answers, visited, jump, submit }) {
return (
<aside>
<h4>Questions</h4>
<div className="palette">
{questions.map((_, i) => (
<div
key={i}
className={
i === current ? "dot active" : answers[i] !== undefined ? "dot answered" : visited.has(i) ? "dot visited" : "dot"
}
onClick={() => jump(i)}
>
{i + 1}
</div>
))}
</div>
<button onClick={submit}>Submit Exam</button>
</aside>
);
}