import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'apo-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  gameList = [
    {
      name: 'Memory',
      link: '/memory',
    },
  ];
}
