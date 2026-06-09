import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { MissionsService } from '../missions/missions-service';
import { Mission } from '../missions/missions';
import { Card } from '../../shared/card/card';
import { MissionStatus } from './mission-status/mission-status';

export interface CardData {
  title: string;
  value: number;
  icon: string;
  iconColor: string;
  bgColor: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [Card, MissionStatus],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private missionsService = inject(MissionsService);

  protected readonly missionsResource = rxResource({
    stream: () => this.missionsService.getMissions(),
    defaultValue: [] as Mission[],
  });

  protected readonly cards = computed<CardData[]>(() => {
    const missions = this.missionsResource.value();

    return [
      {
        title: 'Total Missions',
        value: missions.length,
        icon: 'rocket',
        iconColor: '#4868e9',
        bgColor: '#e8edfd',
      },
      {
        title: 'Active Missions',
        value: missions.filter((mission) => mission.status === 'active').length,
        icon: 'check',
        iconColor: '#5a896c',
        bgColor: '#ddf0e3',
      },
      {
        title: 'Completed',
        value: missions.filter((mission) => mission.status === 'completed').length,
        icon: 'task_alt',
        iconColor: '#2563eb',
        bgColor: '#eff6ff',
      },
      {
        title: 'Critical',
        value: missions.filter((mission) => mission.status === 'critical').length,
        icon: 'error',
        iconColor: '#df3d48',
        bgColor: '#fde7e9',
      },
    ];
  });

  protected readonly isLoading = computed(() => this.missionsResource.isLoading());

  protected readonly missions = computed(() => this.missionsResource.value());
}
