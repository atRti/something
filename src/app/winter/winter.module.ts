import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { marchPath, decemberPath } from '../shared/shared.const';
import { FebruaryComponent } from './february/february.component';
import { JanuaryComponent } from './january/january.component';
import { WinterComponent } from './winter.component';

export const routes: Routes = [
  { path: '', component: WinterComponent,
    children: [
      decemberPath,
      { path: 'jan', component: JanuaryComponent },
      { path: 'feb', component: FebruaryComponent },
      marchPath
    ]
  }
]

@NgModule({
  declarations: [ WinterComponent, JanuaryComponent, FebruaryComponent ],
  imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export default class WinterModule { }
