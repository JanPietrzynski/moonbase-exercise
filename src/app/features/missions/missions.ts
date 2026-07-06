export interface Mission {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  launchDate: Date;
  status: MissionStatus;
  priority: MissionPriority;
  crewSize: number;
}

export type MissionStatus =
  | 'planned'
  | 'active'
  | 'completed'
  | 'critical';

export type MissionPriority =
  | 'low'
  | 'medium'
  | 'high';
