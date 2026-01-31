export default function SetupScreen({ mode, setMode, start }) {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">✔ ProExam</div>
        
      </header>

      {/* Center Card */}
      <div className="card">
        <h1>Exam Portal</h1>
        <p className="subtitle">Select mode to begin</p>

        <div
          className={`option ${mode === "practice" ? "active" : ""}`}
          onClick={() => setMode("practice")}
        >
          <h3>Practice Exam</h3>
          <p>Immediate feedback enabled. Relaxed timing.</p>
        </div>

        <div
          className={`option ${mode === "final" ? "active" : ""}`}
          onClick={() => setMode("final")}
        >
          <h3>Final Exam</h3>
          <p>Strict environment. Results shown after submission.</p>
        </div>

        <button className="start-btn" onClick={start}>
          Start Exam
        </button>
      </div>
    </div>
  );
}
