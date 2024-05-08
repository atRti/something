import { Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', title: 'Seasons', component: DashboardComponent },
  { path: 'winter', loadChildren: () => import('./winter/winter.module').then(m => m.default) },
  { path: 'spring', loadChildren: () => import('./spring/spring.module').then(m => m.default) },
  { path: 'summer', loadChildren: () => import('./summer/summer.module').then(m => m.default) },
  { path: 'autumn', loadChildren: () => import('./autumn/autumn.module').then(m => m.default) },
  { path: '**', loadComponent: () => import('./screens/not-found/not-found.component').then(c => c.default) }
];
