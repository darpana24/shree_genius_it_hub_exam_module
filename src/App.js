import React, { useState } from "react";
import "./App.css";

function App() {
  const [assignments, setAssignments] = useState(false);
  const [attendance, setAttendance] = useState("");
  const [fees, setFees] = useState("");
  const [result, setResult] = useState("");

  const checkEligibility = () => {
    if (!assignments) {
      setResult("❌ Not eligible: All assignments are not completed.");
    } else if (attendance < 90) {
      setResult("❌ Not eligible: Attendance is less than 90%.");
    } else if (fees < 75) {
      setResult("❌ Not eligible: Fee paid is less than 75%.");
    } else {
      setResult("✅ Eligible to attend online exam.");
    }
  };

  return (
    <div className="container">
      <h2>Attend Online Exam (if applicable)</h2>

      <div className="checkbox-row">
  <span>All assignments completed</span>
  <input
    type="checkbox"
    checked={assignments}
    onChange={(e) => setAssignments(e.target.checked)}
  />
</div>

      <input
        type="number"
        placeholder="Lecture attendance (%)"
        value={attendance}
        onChange={(e) => setAttendance(e.target.value)}
      />

      <input
        type="number"
        placeholder="Course fee paid (%)"
        value={fees}
        onChange={(e) => setFees(e.target.value)}
      />

      <button onClick={checkEligibility}>Check Eligibility</button>

      {result && <p className="result">{result}</p>}
    </div>
  );
}

export default App;