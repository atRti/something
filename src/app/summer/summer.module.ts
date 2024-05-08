import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { IS_FIRST, septemberPath, newsResolver } from '../shared/shared.const';
import { RouteDataTransporterComponent } from '../shared/components/route-data-transporter/route-data-transporter.component';
import { NewsService } from '../shared/news.service';
import { AugustComponent } from './august/august.component';
import { JulyComponent } from './july/july.component';
import { SummerComponent } from './summer.component';

export const routes: Routes = [
  { path: '', component: SummerComponent,
    children: [
      { path: 'june', loadComponent: () => import('../shared/components/june/june.component').then(c => c.default),
        providers: [{provide: IS_FIRST, useValue: true}]
      },
      { path: 'july', component: JulyComponent },
      // { path: 'aug', component: AugustComponent },
      { path: 'aug', component: RouteDataTransporterComponent, data: { numOfDays: 31 }, resolve: { news: newsResolver } },
      septemberPath
    ]
  }
]

@NgModule({
  declarations: [ SummerComponent, JulyComponent, AugustComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes), HttpClientModule ],
  providers: [{provide: NewsService}]
})
export default class SummerModule { }
