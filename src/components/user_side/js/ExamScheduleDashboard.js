import React from 'react';
import '../css/ExamSchedule.css';

const ExamSchedule = () => {
  const examData = [
    { date: "25 Mar 2026", time: "10:00 AM – 11:30 AM", course: "Fullstack", subject: "JavaScript", type: "MCQ" },
    { date: "27 Mar 2026", time: "09:30 AM – 11:00 AM", course: "Fullstack", subject: "React.js", type: "Written" },
    { date: "29 Mar 2026", time: "10:00 AM – 12:00 PM", course: "Fullstack", subject: "DBMS", type: "Practical" },
  ];

  return (
    <div className="exam-card-container">
      {/* Header with Icon */}
      <div className="exam-header">
        <div className="calendar-icon-wrapper">
          <div className="calendar-icon">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="check">✓</span>
          </div>
        </div>
        <h1>Exams Schedule</h1>
      </div>

      {/* Schedule Table */}
      <div className="table-responsive">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Course</th>
              <th>Subject</th>
              <th>Exam Type</th>
            </tr>
          </thead>

          <tbody>
            {examData.map((exam, index) => (
              <tr key={index}>
                <td className="date-cell">{exam.date}</td>
                <td className="time-cell">{exam.time}</td>
                <td>{exam.course}</td>
                <td className="subject-cell">{exam.subject}</td>
                <td>{exam.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ExamSchedule;