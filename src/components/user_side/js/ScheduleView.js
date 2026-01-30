import React from 'react';

const ScheduleView = () => {
    // Data moved to a local constant for the component
    const examsData = [
        { id: 1, subject: "React Fundamentals", date: "2023-11-15", time: "10:00 AM", status: "upcoming" },
        { id: 2, subject: "Advanced CSS & Animations", date: "2023-11-18", time: "02:00 PM", status: "pending" },
        { id: 3, subject: "Node.js Architecture", date: "2023-11-10", time: "11:30 AM", status: "completed" },
        { id: 4, subject: "Database Management", date: "2023-11-20", time: "09:00 AM", status: "upcoming" }
    ];

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Exam Schedule</h2>
            <div className="card overflow-hidden">
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {examsData.map(exam => (
                                <tr key={exam.id}>
                                    <td className="font-medium">{exam.subject}</td>
                                    <td>{exam.date}</td>
                                    <td>{exam.time}</td>
                                    <td>
                                        <span className={`badge badge-${exam.status}`}>
                                            {exam.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ScheduleView;