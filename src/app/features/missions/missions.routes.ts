import { Routes } from '@angular/router';

import { Missions } from './missions';

export const missionsRoutes: Routes = [
  {
    path: '',
    title: 'Missions',
    component: Missions,
  },
  {
    path: ':id',
    title: 'Mission',
    loadComponent: () => import('./mission/mission').then((m) => m.Mission),
  },
];
