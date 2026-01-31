<<<<<<< HEAD
export default function Header({ time }) {
const m = String(Math.floor(time / 60)).padStart(2, "0");
const s = String(time % 60).padStart(2, "0");


return (
<header>
<h2>ProExam</h2>
<div className={time < 60 ? "timer warning" : "timer"}>
{m}:{s}
</div>
</header>
);
}
=======
import React from 'react';
import { Menu, LogOut } from 'lucide-react';

const Header = ({ userName, onLogout, toggleSidebar }) => {
    const today = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        <header className="header">
            <div className="flex items-center gap-4">
                <button className="cursor-pointer md:hidden btn-outline" onClick={toggleSidebar} style={{ border: 'none' }}>
                    <Menu size={24} />
                </button>
                <h2 className="text-lg font-semibold text-gray-700">{today}</h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <div className="font-bold text-sm">{userName}</div>
                    <div className="text-xs text-gray-500">Student</div>
                </div>
                <button onClick={onLogout} className="btn-logout flex items-center gap-2">
                    <LogOut size={16} />
                    <span className="logout-text">Logout</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
>>>>>>> 06b52293bdb0b557babe52dd11eeb2b732b8d2d0
