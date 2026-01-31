export default function ResultModal({ score, total }) {
return (
<div className="modal">
<div className="card">
<h2>Exam Completed</h2>
<p>{Math.round((score / total) * 100)}%</p>
<p>Correct: {score} / {total}</p>
<button onClick={() => window.location.reload()}>Restart</button>
</div>
</div>
);
}