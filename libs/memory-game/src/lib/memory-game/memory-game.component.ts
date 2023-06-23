import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MemoryGameService } from '../services/memory-game.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { Game, HighscoreService } from '@apo/gamification';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { first } from 'rxjs';

@Component({
  selector: 'apo-memory-game',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    RouterLink,
    DialogModule,
    ButtonModule,
    RouterOutlet,
    DynamicDialogModule,
  ],
  providers: [MemoryGameService],
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent {
  row = 4;
  columns = 4;
  cardSize = 8;

  protected readonly history = history;
  protected readonly Game = Game;

  constructor(
    public readonly gameService: MemoryGameService,
    public readonly router: Router,
    public readonly highscoreService: HighscoreService
  ) {
    this.startGame();

    this.gameService.hasGameEnded$
      .pipe(first())
      .subscribe(() =>
        this.highscoreService.showEndDialog(
          Game.Memory,
          this.gameService.steps,
          'Hurra! Du hast gewonnen!',
          `Du konntest das Spiel mit ${gameService.steps} Zügen beenden.`
        )
      );
  }

  startGame() {
    this.gameService.initializeGameBoard(this.row, this.columns, this.cardSize);
  }
}
