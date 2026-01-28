import React from 'react';

const exams = [
  { date: '25 Mar 2026', time: '10:00 AM – 11:30 AM', subject: 'JavaScript', type: 'MCQ' },
  { date: '27 Mar 2026', time: '09:30 AM – 11:00 AM', subject: 'React.js', type: 'Written' },
  { date: '29 Mar 2026', time: '10:00 AM – 12:00 PM', subject: 'DBMS', type: 'Practical' },
];

const ExamSchedule = () => {
  return (
    <div className="exam-schedule" style={{width:500, backgroundColor:"#f8fbff",justifyContent:"center" , position:"relative",margin:15}} >
      <h2>📅 Exams Schedule</h2>
      <table >
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
          {exams.map((exam, index) => (
            <tr key={index}>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
              <td>Fullstack</td>
              <td>{exam.subject}</td>
              <td>{exam.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ExamSchedule;