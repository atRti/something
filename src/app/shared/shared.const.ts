import { inject, InjectionToken } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { NewsService } from './news.service';
import { map } from 'rxjs/operators';

export const IS_FIRST = new InjectionToken('Is first in season');

export const decemberPath = { path: 'dec', loadComponent: () => import('../shared/components/december/december.component').then(c => c.default) };
export const marchPath = { path: 'march', loadComponent: () => import('../shared/components/march/march.component').then(c => c.default) }
export const septemberPath = { path: 'sep', loadComponent: () => import('../shared/components/september/september.component').then(c => c.default) };

export const newsResolver: ResolveFn<string> = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const monthKey: string = state.url.split('/').at(-1) ?? '';
  return inject(NewsService).getNews().pipe(map((val: any) => val[monthKey]));
};
