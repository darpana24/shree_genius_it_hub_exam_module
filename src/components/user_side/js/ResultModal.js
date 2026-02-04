export default function ResultModal({ score, total, onRedirect, onRestart }) {
return (
<div className="modal">
<div className="card">
<h2>Exam Completed</h2>
<p>{Math.round((score / total) * 100)}%</p>
<p>Correct: {score} / {total}</p>
<div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
  <button onClick={onRedirect}>Try Again</button>
  <button onClick={onRestart}>New Attempt</button>
</div>
</div>
</div>
);
}