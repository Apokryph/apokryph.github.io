import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScoreDashboardComponent } from './components/score-dashboard/score-dashboard.component';

export const appRoutes: Route[] = [
  {
    path: 'memory',
    title: 'Apokryph Angular Memory Game',
    loadChildren: () =>
      import('@apo/memory-game').then((m) => m.memoryGameRoutes),
  },
  {
    path: 'highscore-board',
    title: 'Apokryph Angular Games Highscores',
    component: ScoreDashboardComponent,
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
