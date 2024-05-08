import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-route-data-transporter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-data-transporter.component.html',
  styleUrl: './route-data-transporter.component.scss'
})
export class RouteDataTransporterComponent {
  get daysNumber() {
    return this.route.snapshot.data['numOfDays'];
  }
  get info() {
    return this.route.snapshot.data['news'];
  }
  constructor(private route: ActivatedRoute) {}
}
