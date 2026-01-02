
import React from 'react';
import { Notification } from '../types';

interface NotificationInboxProps {
  notifications: Notification[];
  onResume: () => void;
}

const NotificationInbox: React.FC<NotificationInboxProps> = ({ notifications, onResume }) => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        <button className="text-sm text-blue-600 font-medium hover:underline">Mark all as read</button>
      </div>
      
      {notifications.length === 0 ? (
        <div className="bg-white p-12 rounded-xl border border-gray-200 text-center space-y-3">
          <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
             <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
          </div>
          <p className="text-gray-500 font-medium">Your inbox is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {[...notifications].reverse().map((notif) => (
            <div 
              key={notif.id} 
              className={`bg-white p-5 rounded-xl border transition group hover:border-blue-300 shadow-sm ${notif.status === 'Ignored' ? 'opacity-70 grayscale-[0.3]' : 'border-gray-200'}`}
            >
              <div className="flex gap-4">
                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${notif.status === 'Ignored' ? 'bg-gray-100 text-gray-400' : 'bg-blue-100 text-blue-600'}`}>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">AI MOMENTUM NUDGE</span>
                    <span className="text-xs text-gray-400">{new Date(notif.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <p className="text-gray-800 font-medium">"{notif.nudge.message}"</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-4">
                       <div className="flex items-center gap-1 text-[11px] font-bold text-gray-500">
                         <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         {notif.nudge.timeEstimate}
                       </div>
                    </div>
                    <div className="flex gap-2">
                       <button 
                        onClick={onResume}
                        className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition"
                       >
                         Resume
                       </button>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 italic">Target: {notif.nudge.motivationState} • {notif.nudge.nudgeType}</span>
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${notif.status === 'Ignored' ? 'bg-gray-100 text-gray-500' : 'bg-green-100 text-green-700'}`}>
                      {notif.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
         <h4 className="font-bold text-blue-800 text-sm mb-2">Reviewer Note:</h4>
         <p className="text-xs text-blue-700 leading-relaxed">
           This inbox simulates the delivery of high-intelligence nudges. In a real application, these would appear as push notifications or personalized emails. Note how the messaging adapts tone based on the learner's state—shifting from a "Curiosity" angle when engaged to a "Micro-commitment" recovery angle after long absences.
         </p>
      </div>
    </div>
  );
};

export default NotificationInbox;
