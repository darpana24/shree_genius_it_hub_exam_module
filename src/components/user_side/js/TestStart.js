import React from 'react';
import { BookOpen } from 'lucide-react';

const TestStart = ({ onCancel, onStart }) => {
    return (
        <div className="p-6 flex items-center justify-center h-full">
            <div className="card p-8 text-center max-w-md w-full">
                <div 
                    className="flex justify-center mb-4" 
                    style={{ color: 'var(--primary)' }}
                >
                    <BookOpen size={48} />
                </div>
                
                <h2 className="text-xl font-bold mb-2">Ready to Start Exam?</h2>
                <p className="text-gray-500 mb-6 text-sm">
                    This assessment covers React basics. You have 60 minutes to complete it.
                </p>
                
                <div className="flex gap-3 justify-center">
                    <button 
                        onClick={onCancel} 
                        className="btn btn-outline"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={onStart} 
                        className="btn btn-primary"
                    >
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestStart;