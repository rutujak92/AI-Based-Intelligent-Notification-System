
export type MotivationState = 'Engaged' | 'Busy but willing' | 'Stuck/confused' | 'Avoiding due to guilt' | 'Burned out';

export type NudgeType = 'Micro-commitment' | 'Progress reminder' | 'Recovery re-entry' | 'Curiosity-based' | 'Silence';

export interface LearnerContext {
  daysSinceLastLogin: number;
  courseProgress: number;
  lastActivity: string;
  learningGoal: string;
  avgSessionLength: string;
  pastNotificationResponse: string;
}

export interface AINudge {
  message: string;
  recommendedAction: string;
  timeEstimate: string;
  motivationState: MotivationState;
  nudgeType: NudgeType;
  explanation: string;
}

export interface Notification {
  id: string;
  timestamp: string;
  nudge: AINudge;
  status: 'Unread' | 'Read' | 'Ignored';
}

export enum AppScreen {
  HOME = 'home',
  INBOX = 'inbox',
  LEARNING = 'learning'
}
