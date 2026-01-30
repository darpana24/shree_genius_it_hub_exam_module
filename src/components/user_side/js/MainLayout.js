import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children, userName, onLogout, activeTab, setActiveTab }) => {
    // State to track if the mobile sidebar is visible
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="main-layout-container">
            {/* MOBILE BACKDROP 
                This div only appears when the sidebar is open on mobile.
                Clicking it triggers closeSidebar().
            */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 999 /* Just below sidebar z-index */
                    }}
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar Component */}
            <Sidebar 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                isOpen={isSidebarOpen} 
                closeSidebar={closeSidebar} 
            />
            
            {/* Main Content Area */}
            <div className="main-content">
                <Header 
                    userName={userName} 
                    onLogout={onLogout} 
                    toggleSidebar={toggleSidebar} 
                />
                
                <main className="flex-1 overflow-y-auto" style={{ background: 'var(--bg)' }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;