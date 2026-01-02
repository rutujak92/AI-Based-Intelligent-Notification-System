
import { LearnerContext, Notification } from './types';

export const INITIAL_CONTEXT: LearnerContext = {
  daysSinceLastLogin: 5,
  courseProgress: 42,
  lastActivity: "Paused during SQL joins example",
  learningGoal: "Career switch",
  avgSessionLength: "10-15 minutes",
  pastNotificationResponse: "Ignored last 2"
};

export const MOCK_COURSE = {
  title: "Advanced Data Science: From Zero to Pro",
  provider: "University of AI",
  instructor: "Dr. Sarah Chen",
  thumbnail: "https://picsum.photos/seed/course/800/400",
  modules: 12,
  completedModules: 5
};

export const INITIAL_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    timestamp: '2023-10-24T10:00:00Z',
    status: 'Ignored',
    nudge: {
      message: "Ready to jump back in? Just 5 minutes on SQL today.",
      recommendedAction: "Review SQL Joins",
      timeEstimate: "5 mins",
      motivationState: "Avoiding due to guilt",
      nudgeType: "Micro-commitment",
      explanation: "Learner was inactive for 3 days."
    }
  }
];
