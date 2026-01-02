
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CourseHome from './components/CourseHome';
import NotificationInbox from './components/NotificationInbox';
import ContextEditor from './components/ContextEditor';
import ResumeScreen from './components/ResumeScreen';
import { generateNudge } from './services/geminiService';
import { 
  AppScreen, 
  LearnerContext, 
  AINudge, 
  Notification 
} from './types';
import { 
  INITIAL_CONTEXT, 
  INITIAL_NOTIFICATIONS 
} from './constants';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.HOME);
  const [context, setContext] = useState<LearnerContext>(INITIAL_CONTEXT);
  const [nudge, setNudge] = useState<AINudge | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [loading, setLoading] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const fetchNudge = useCallback(async () => {
    setLoading(true);
    const newNudge = await generateNudge(context);
    setNudge(newNudge);
    
    // Create a new notification for this session/nudge (prototype logic)
    const newNotif: Notification = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      nudge: newNudge,
      status: 'Read'
    };
    setNotifications(prev => [...prev, newNotif]);
    setLoading(false);
  }, [context]);

  useEffect(() => {
    fetchNudge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateContext = () => {
    fetchNudge();
  };

  const handleResume = () => {
    setIsResumeOpen(true);
  };

  const unreadCount = notifications.filter(n => n.status === 'Read').length;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header 
        currentScreen={screen} 
        setScreen={setScreen} 
        unreadCount={unreadCount} 
      />
      
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300 ${screen === AppScreen.HOME ? 'lg:pr-96' : ''}`}>
        {screen === AppScreen.HOME && (
          <CourseHome 
            nudge={nudge} 
            isLoading={loading} 
            onRefresh={handleUpdateContext}
            onResume={handleResume}
          />
        )}
        
        {screen === AppScreen.INBOX && (
          <NotificationInbox 
            notifications={notifications} 
            onResume={handleResume}
          />
        )}
      </main>

      {screen === AppScreen.HOME && (
        <ContextEditor 
          context={context} 
          setContext={setContext} 
          onApply={handleUpdateContext} 
        />
      )}

      {isResumeOpen && (
        <ResumeScreen 
          onBack={() => setIsResumeOpen(false)} 
          actionTitle={nudge?.recommendedAction || "Resume Learning"}
        />
      )}

      {/* Mobile Context Trigger */}
      <div className="fixed bottom-4 right-4 lg:hidden">
         <button 
           onClick={() => alert("Prototype Simulator is best viewed on Desktop. Use the 'Update Context' flow to see AI changes.")}
           className="h-12 w-12 bg-indigo-600 rounded-full text-white shadow-xl flex items-center justify-center"
         >
           <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
         </button>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-3 text-center lg:pr-80">
        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
          AI Learning Momentum Engine • Rapid Prototype • Powered by Gemini Flash
        </p>
      </footer>
    </div>
  );
};

export default App;
