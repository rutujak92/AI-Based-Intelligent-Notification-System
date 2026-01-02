
import React from 'react';
import { LearnerContext, MotivationState } from '../types';

interface ContextEditorProps {
  context: LearnerContext;
  setContext: (context: LearnerContext) => void;
  onApply: () => void;
}

const ContextEditor: React.FC<ContextEditorProps> = ({ context, setContext, onApply }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContext({
      ...context,
      [name]: name === 'daysSinceLastLogin' || name === 'courseProgress' ? Number(value) : value
    });
  };

  return (
    <div className="bg-white border-l border-gray-200 w-80 fixed right-0 top-16 bottom-0 hidden lg:block overflow-y-auto p-6 z-40 shadow-2xl">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-purple-100 p-1.5 rounded text-purple-600">
           <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a2 2 0 11-4 0V4zM18 14a2 2 0 100-4 2 2 0 000 4zM7 18a2 2 0 100-4 2 2 0 000 4z" /></svg>
        </div>
        <h2 className="font-bold text-gray-900">Prototype Simulator</h2>
      </div>
      
      <p className="text-xs text-gray-500 mb-6 italic">Adjust the learner's state to see how the AI adjusts its nudge strategy.</p>
      
      <div className="space-y-5">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Days Since Login</label>
          <input 
            type="number" 
            name="daysSinceLastLogin"
            value={context.daysSinceLastLogin}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Course Progress (%)</label>
          <input 
            type="range" 
            name="courseProgress"
            min="0"
            max="100"
            value={context.courseProgress}
            onChange={handleChange}
            className="w-full"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-medium">
             <span>0%</span>
             <span>{context.courseProgress}%</span>
             <span>100%</span>
          </div>
        </div>
        
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Last Activity</label>
          <select 
            name="lastActivity"
            value={context.lastActivity}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Paused during SQL joins example</option>
            <option>Just finished Introduction Quiz</option>
            <option>Halfway through Video: Data Ethics</option>
            <option>Failed Quiz: Neural Networks</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Learning Goal</label>
          <select 
            name="learningGoal"
            value={context.learningGoal}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Career switch</option>
            <option>Skill brush-up</option>
            <option>Mandatory certification</option>
            <option>Personal interest</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Avg Session Length</label>
          <select 
            name="avgSessionLength"
            value={context.avgSessionLength}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>5-10 minutes</option>
            <option>10-15 minutes</option>
            <option>30-60 minutes</option>
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Past Response</label>
          <select 
            name="pastNotificationResponse"
            value={context.pastNotificationResponse}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option>Ignored last 2</option>
            <option>Engaged with previous</option>
            <option>Never sent</option>
          </select>
        </div>
        
        <button 
          onClick={onApply}
          className="w-full mt-6 px-4 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Update Context
        </button>
      </div>
      
      <div className="mt-12 bg-gray-50 p-4 rounded-lg border border-gray-200 border-dashed">
         <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Prototype Logic</h3>
         <ul className="text-[11px] text-gray-500 space-y-2 leading-relaxed">
           <li>• <strong>Ethical Filter:</strong> Gemini is prompted to avoid FOMO/Guilt.</li>
           <li>• <strong>Intent Mapping:</strong> Classifies motivation based on login frequency and progress.</li>
           <li>• <strong>Action Extraction:</strong> Links "Resume" button directly to contextually relevant next step.</li>
         </ul>
      </div>
    </div>
  );
};

export default ContextEditor;
