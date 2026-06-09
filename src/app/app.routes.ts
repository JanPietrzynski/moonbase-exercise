import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard',
    component: Dashboard,
  },
  {
    path: 'missions',
    loadChildren: () =>
      import('./features/missions/missions.routes').then((m) => m.missionsRoutes),
  },
];
