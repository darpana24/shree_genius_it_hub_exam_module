import React from "react";
import { AlertTriangle } from "lucide-react";

const ExamInstructions = ({ onBack, onProceed }) => {
  return (
    <div className="p-6 flex items-center justify-center h-full">
      <div className="card p-8 max-w-lg w-full">
        <div className="flex items-center gap-2 mb-4 text-orange-500">
          <AlertTriangle />
          <h2 className="text-xl font-bold">Exam Instructions</h2>
        </div>

        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 mb-6">
          <li>The exam duration is <b>60 minutes</b>.</li>
          <li>Do not refresh or close the browser.</li>
          <li>Fullscreen mode is mandatory.</li>
          <li>Each question is compulsory.</li>
          <li>Any malpractice may lead to disqualification.</li>
        </ul>

        <div className="flex justify-between">
          <button onClick={onBack} className="btn btn-outline">
            Back
          </button>
          <button onClick={onProceed} className="btn btn-primary">
            Proceed to Exam
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamInstructions;
