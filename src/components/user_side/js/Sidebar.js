import React from 'react';
import Logo from "../images/logo.jpeg";

import { LayoutDashboard, Clock, PlayCircle } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isOpen, closeSidebar }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'schedule', label: 'Exam Schedule', icon: Clock },
        { id: 'test', label: 'Start Test', icon: PlayCircle },
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="p-6 flex flex-col items-center border-b border-gray-200">
                <img 
                    src={Logo}
                    alt="Logo" 
                    style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                />
                <h3 className="font-bold text-primary mt-2 text-center text-sm">
                    SHREE GENIUS<br/>IT HUB LLP
                </h3>
            </div>
            
            <nav className="mt-4">
                {menuItems.map(item => (
                    <div 
                        key={item.id} 
                        className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => { setActiveTab(item.id); closeSidebar(); }}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;