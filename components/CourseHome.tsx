
import React from 'react';
import { MOCK_COURSE } from '../constants';
import { AINudge, AppScreen } from '../types';

interface CourseHomeProps {
  nudge: AINudge | null;
  isLoading: boolean;
  onRefresh: () => void;
  onResume: () => void;
}

const CourseHome: React.FC<CourseHomeProps> = ({ nudge, isLoading, onRefresh, onResume }) => {
  return (
    <div className="space-y-8">
      {/* Course Banner */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="h-48 w-full bg-cover bg-center" style={{ backgroundImage: `url(${MOCK_COURSE.thumbnail})` }}>
          <div className="h-full w-full bg-black bg-opacity-30 flex items-end p-6">
            <div className="text-white">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-90">{MOCK_COURSE.provider}</p>
              <h1 className="text-3xl font-bold mt-1">{MOCK_COURSE.title}</h1>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 max-w-lg">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span className="font-medium">Overall Progress</span>
              <span>{Math.round((MOCK_COURSE.completedModules / MOCK_COURSE.modules) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${(MOCK_COURSE.completedModules / MOCK_COURSE.modules) * 100}%` }}
              ></div>
            </div>
          </div>
          <button 
            onClick={onResume}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Resume Learning
          </button>
        </div>
      </div>

      {/* AI Momentum Card */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-blue-100 p-6 shadow-md relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4">
          <button 
            onClick={onRefresh}
            className="p-2 text-blue-400 hover:text-blue-600 transition-colors"
            title="Regenerate Nudge"
          >
            <svg className={`h-5 w-5 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-blue-600 p-3 rounded-lg text-white shadow-lg">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                Your Momentum Boost
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">AI Personal</span>
              </h2>
              {isLoading ? (
                <div className="space-y-2 mt-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
                </div>
              ) : nudge ? (
                <div className="mt-4">
                  <p className="text-lg text-gray-800 leading-relaxed font-medium italic">
                    "{nudge.message}"
                  </p>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white rounded-md shadow-sm border border-blue-100">
                        <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{nudge.timeEstimate} estimated</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-white rounded-md shadow-sm border border-blue-100">
                        <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{nudge.recommendedAction}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button 
                      onClick={onResume}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md font-bold hover:bg-blue-700 transition shadow-sm text-sm"
                    >
                      Resume Now
                    </button>
                    <button className="px-6 py-2 bg-white border border-gray-200 text-gray-600 rounded-md font-semibold hover:bg-gray-50 transition text-sm">
                      Maybe later
                    </button>
                  </div>
                  
                  {/* Explanation for Prototype Reviewers */}
                  <div className="mt-6 pt-4 border-t border-blue-100">
                    <p className="text-[11px] text-blue-400 font-medium uppercase tracking-wider">Prototype Insight (Contextual Reasoning):</p>
                    <p className="text-xs text-blue-600 mt-1 italic opacity-80">
                      "Learner identified as '{nudge.motivationState}' ({nudge.nudgeType}). {nudge.explanation}"
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Static Syllabus/Goal modules to complete the look */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Current Module</h3>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">5.4 SQL Joins & Subqueries</p>
                  <p className="text-xs text-gray-500">12 min remaining • Video & Exercise</p>
                </div>
              </div>
              <button className="text-blue-600 font-bold text-sm">Review</button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Upcoming Next</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 transition">
                   <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">{i+5}</div>
                   <div className="flex-1">
                     <p className="text-sm font-semibold text-gray-700">Database Normalization Level {i}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Weekly Goal</h3>
            <div className="text-center py-4">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full border-4 border-gray-100 relative">
                 <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin-slow" style={{ animationDuration: '3s' }}></div>
                 <span className="text-2xl font-bold text-gray-800">2/5</span>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-600">Modules Completed</p>
              <p className="text-xs text-gray-400 mt-1">Goal: 5 modules this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHome;
