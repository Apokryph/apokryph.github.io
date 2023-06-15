import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: 'memory',
    loadChildren: () =>
      import('@apo/memory-game').then((m) => m.memoryGameRoutes),
  },
  { path: '', component: DashboardComponent },
];
