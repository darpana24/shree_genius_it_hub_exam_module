import React from 'react';
import logo from './images/logo.png';
import './StudentTable.css';
const examData = [
  {
    date: '25 Mar 2026',
    time: '10:00 AM – 11:30 AM',
    course: 'Fullstack',
    subject: 'JavaScript',
    type: 'Practical',
  },
  {
    date: '27 Mar 2026',
    time: '09:30 AM – 11:00 AM',
    course: 'Fullstack',
    subject: 'React.js',
    type: 'Final',
  },
  {
    date: '29 Mar 2026',
    time: '10:00 AM – 12:00 PM',
    course: 'Fullstack',
    subject: 'DBMS',
    type: 'Practical',
  },
];

function StudentTable() {
  return (
    <div className="table-container">
      <div className="title-row">
  <img src={logo} alt="Logo" className="logo" />
  <h2 >Exams Schedule</h2>
</div>
      <table>
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
              <td>{exam.date}</td>
              <td>{exam.time}</td>
              <td>{exam.course}</td>
              <td>{exam.subject}</td>
              <td>{exam.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="create-btn">Create Subject</button>
    </div>
    
  );
}

export default StudentTable;