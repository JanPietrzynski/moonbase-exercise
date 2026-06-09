import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Mission, MissionStatus as MissionStatusType } from '../../missions/missions';

interface StatusBreakdownItem {
  status: MissionStatusType;
  label: string;
  count: number;
  percent: number;
  color: string;
}

const STATUS_CONFIG: Record<
  MissionStatusType,
  { label: string; color: string }
> = {
  active: { label: 'Active', color: '#2563eb' },
  planned: { label: 'Planned', color: '#93c5fd' },
  completed: { label: 'Completed', color: '#22c55e' },
  critical: { label: 'Critical', color: '#ef4444' },
};

@Component({
  selector: 'app-mission-status',
  imports: [RouterLink],
  templateUrl: './mission-status.html',
  styleUrl: './mission-status.scss',
})
export class MissionStatus {
  missions = input.required<Mission[]>();

  protected readonly total = computed(() => this.missions().length);

  protected readonly statusBreakdown = computed<StatusBreakdownItem[]>(() => {
    const missions = this.missions();
    const total = missions.length;

    return (Object.keys(STATUS_CONFIG) as MissionStatusType[]).map((status) => {
      const count = missions.filter((mission) => mission.status === status).length;

      return {
        status,
        label: STATUS_CONFIG[status].label,
        count,
        percent: total ? Math.round((count / total) * 100) : 0,
        color: STATUS_CONFIG[status].color,
      };
    });
  });

  protected readonly chartGradient = computed(() => {
    const segments = this.statusBreakdown().filter((item) => item.count > 0);
    const total = this.total();

    if (!total || !segments.length) {
      return '#e5e7eb';
    }

    let current = 0;

    return `conic-gradient(${segments
      .map((item) => {
        const start = current;
        current += (item.count / total) * 100;
        return `${item.color} ${start}% ${current}%`;
      })
      .join(', ')})`;
  });
}
