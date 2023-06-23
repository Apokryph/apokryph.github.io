import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighscoreBoardComponent } from '@apo/gamification';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'apo-score-dashboard',
  standalone: true,
  imports: [CommonModule, HighscoreBoardComponent, RouterLink, ButtonModule],
  templateUrl: './score-dashboard.component.html',
  styleUrls: ['./score-dashboard.component.scss'],
})
export class ScoreDashboardComponent {}
