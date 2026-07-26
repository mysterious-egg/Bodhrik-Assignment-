export interface SessionMetric {
  timestamp: string;
  engagement: number;
  clarity: number;
  pacing: number;
}

export interface Session {
  id: string;
  studentName: string;
  date: string;
  duration: number;
  mentorName: string;
  overallScore: number;
  metrics: SessionMetric[];
}