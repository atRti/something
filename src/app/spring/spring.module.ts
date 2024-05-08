import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { RouteDataTransporterComponent } from '../shared/components/route-data-transporter/route-data-transporter.component';
import { marchPath, newsResolver } from '../shared/shared.const';
import { NewsService } from '../shared/news.service';
import { SpringComponent } from './spring.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';

export const routes: Routes = [
  { path: '', component: SpringComponent,
    children: [
      marchPath,
      { path: 'april', component: RouteDataTransporterComponent, data: { numOfDays: 30 }, resolve: { news: newsResolver } },
      { path: 'may', component: MayComponent },
      { path: 'june', loadComponent: () => import('../shared/components/june/june.component').then(c => c.default) }
    ]
  }
]

@NgModule({
  declarations: [ SpringComponent, AprilComponent, MayComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), HttpClientModule ],
  providers: [{provide: NewsService}]
})
export default class SpringModule { }
