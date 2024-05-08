import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { septemberPath, decemberPath } from '../shared/shared.const';
import { AutumnComponent } from './autumn.component';
import { OctoberComponent } from './october/october.component';
import { NovemberComponent } from './november/november.component';

export const routes: Routes = [
  { path: '', component: AutumnComponent,
    children: [
      septemberPath,
      { path: 'oct', component: OctoberComponent },
      { path: 'nov', component: NovemberComponent },
      decemberPath
    ]
  }
]

@NgModule({
  declarations: [ AutumnComponent, OctoberComponent, NovemberComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export default class AutumnModule { }
