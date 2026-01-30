import React, { useState } from "react";
import "./StudentTable.css";

const initialData = [
  { id: 1, name: "Vaishnavi", subject: "React", examType: "Quiz", marks: 85, status: "Pass", date: "2026-01-28", time: "10:30 AM" },
  { id: 2, name: "Rupali", subject: "Fullstack", examType: "Quiz", marks: 45, status: "Fail", date: "2026-01-29", time: "02:00 PM" },
  { id: 3, name: "Prajakta", subject: "DBMS", examType: "Quiz", marks: 85, status: "Pass", date: "2026-01-30", time: "10:30 AM" },
];

function StudentTable() {
  const [students] = useState(initialData);
  const [searchName, setSearchName] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSearch = () => {
    const student = students.find(
      (s) => s.name.toLowerCase() === searchName.toLowerCase()
    );
    setSelectedStudent(student || null);
  };

  return (
    <div className="container">
      <h2>Student Marksheet</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <br></br>
      <button onClick={handleSearch}>Search</button>

      {selectedStudent ? (
        <table className="student-table">
          <thead>
            <tr>
                <th>Student Name</th>
              <th>Subject</th>
              <th>Exam Type</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedStudent.name}</td>
              <td>{selectedStudent.subject}</td>
              <td>{selectedStudent.examType}</td>
              <td>{selectedStudent.marks}</td>
              <td className={selectedStudent.status === "Pass" ? "pass" : "fail"}>
                {selectedStudent.status}
              </td>
              <td>{selectedStudent.date}</td>
              <td>{selectedStudent.time}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p><h6>Enter valid Username to see marksheet.</h6></p>
      )}
    </div>
  );
}

export default StudentTable;