import { DatePipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

import { MissionsService } from './missions-service';

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

@Component({
  selector: 'app-missions',
  imports: [RouterLink, DatePipe, NgFor, MatButtonModule, MatIconModule],
  templateUrl: './missions.html',
  styleUrl: './missions.scss',
})
export class Missions {
  protected readonly missions = toSignal(inject(MissionsService).getMissions());
}
