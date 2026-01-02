
import React from 'react';
import { MOCK_COURSE } from '../constants';

interface ResumeScreenProps {
  onBack: () => void;
  actionTitle: string;
}

const ResumeScreen: React.FC<ResumeScreenProps> = ({ onBack, actionTitle }) => {
  return (
    <div className="fixed inset-0 bg-white z-[60] flex flex-col">
      {/* Top bar */}
      <div className="h-16 border-b border-gray-200 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 text-gray-400 hover:text-gray-600 transition"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div className="h-6 w-px bg-gray-200"></div>
          <div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{MOCK_COURSE.title}</p>
            <h2 className="text-sm font-bold text-gray-900">{actionTitle}</h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
             <span>Level 5 of 12</span>
             <div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden">
               <div className="bg-blue-600 h-full w-[42%]"></div>
             </div>
           </div>
           <button className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs font-bold rounded">Exit</button>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-8">
           <div className="bg-white rounded-xl shadow-xl overflow-hidden aspect-video relative group">
              <img src="https://picsum.photos/seed/learning/1200/675" alt="Lesson Visual" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-20 w-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white flex items-center justify-center text-white cursor-pointer hover:scale-110 transition transform">
                   <svg className="h-10 w-10 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black opacity-80 text-white">
                <p className="font-bold">Next Segment: SQL JOIN Syntax Deep Dive</p>
                <p className="text-sm opacity-80">You're resuming 4:12 into the session.</p>
              </div>
           </div>
           
           <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                 <h1 className="text-2xl font-bold text-gray-900">Understanding Inner vs. Left Joins</h1>
                 <div className="flex gap-2">
                    <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
                    <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition"><svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg></button>
                 </div>
              </div>
              <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>SQL joins are the fundamental way we connect data between different tables. Think of it like looking at two lists and finding the common ground.</p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 font-mono text-sm text-blue-900 rounded-r">
                   SELECT orders.id, customers.name<br/>
                   FROM orders<br/>
                   INNER JOIN customers ON orders.customer_id = customers.id;
                </div>
                <p>As you can see, the <code>INNER JOIN</code> only returns records where there's a match in both tables. If a customer hasn't placed an order, they won't appear here.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScreen;
