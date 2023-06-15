import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: 'memory',
    title: 'Angular Memory Game',
    loadChildren: () =>
      import('@apo/memory-game').then((m) => m.memoryGameRoutes),
  },
  {
    path: '',
    title: 'Apokryph Angular Games Dashboard',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
