import { Component } from '@angular/core';
import { HighscoreService } from '../../services/highscore.service';
import { first, map, Observable } from 'rxjs';
import { Highscore } from '../../models/highscore';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'apo-highscore-board',
  imports: [
    NgFor,
    AsyncPipe,
    DataViewModule,
    ProgressSpinnerModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './highscore-board.component.html',
  styleUrls: ['./highscore-board.component.scss'],
})
export class HighscoreBoardComponent {
  highscores$: Observable<Highscore[] | undefined>;

  constructor(public readonly highscoreService: HighscoreService) {
    this.highscores$ =
      this.highscoreService.getHighscores().pipe(
        first(),
        map((highscores) => highscores.sort((a, b) => a.score - b.score))
      ) ?? undefined;
  }
}
