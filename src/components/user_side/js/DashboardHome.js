import React from 'react';
import { Activity } from 'lucide-react';

const DashboardHome = ({ userName }) => {
    // Stat data derived from original mock data logic
    const stats = [
        { label: 'Tests Completed', value: '12', color: '#16a34a' },
        { label: 'Average Score', value: '85%', color: '#f97316' },
        { label: 'Pending Exams', value: '1', color: '#2563eb' },
    ];

    const recentExams = [
        { id: 1, subject: "React Fundamentals", date: "2026-2-15", status: "upcoming" },
        { id: 2, subject: "Advanced CSS & Animations", date: "2026-1-18", status: "pending" },
        { id: 3, subject: "Node.js Architecture", date: "2026-1-10", status: "completed" },
    ];

    return (
        <div className="p-6">
            {/* Welcome Banner */}
            <div className="card p-6 mb-6" style={{ 
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))', 
                color: 'white' 
            }}>
                <h1 className="text-2xl font-bold mb-2">
                    Welcome back, {userName.split(' ')[0]}! 👋
                </h1>
                <p style={{ opacity: 0.9 }}>
                    Ready to shine and learn today? You have upcoming exams this week.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {stats.map((stat, i) => (
                    <div key={i} className="card p-6 flex justify-between items-center">
                        <div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                            <div className="text-3xl font-bold mt-1" style={{ color: stat.color }}>
                                {stat.value}
                            </div>
                        </div>
                        <div className="p-3 bg-gray-100 rounded-full text-gray-500">
                            <Activity size={20} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Table */}
            <div className="card overflow-hidden">
                <div className="p-4 border-b">
                    <h3 className="font-bold">Recent Activity</h3>
                </div>
                <table>
                    <tbody>
                        {recentExams.map(exam => (
                            <tr key={exam.id}>
                                <td className="font-medium">{exam.subject}</td>
                                <td>{exam.date}</td>
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
    );
};

export default DashboardHome;