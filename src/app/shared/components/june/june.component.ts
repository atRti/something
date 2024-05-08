import { Component, Inject, Optional } from '@angular/core';
import { IS_FIRST } from '../../shared.const';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-june',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './june.component.html',
  styleUrl: './june.component.scss'
})
export default class JuneComponent {
  get test() {
    return this.isItFirstMonthOfSeason;
  }
  constructor(@Optional() @Inject(IS_FIRST) public isItFirstMonthOfSeason: boolean) {}
}
