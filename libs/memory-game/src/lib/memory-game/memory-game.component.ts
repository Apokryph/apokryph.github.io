import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { MemoryGameService } from '../services/memory-game.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

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
  ],
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent {
  row = 4;
  columns = 4;
  cardSize = 8;

  constructor(
    public readonly gameService: MemoryGameService,
    public readonly router: Router
  ) {
    this.startGame();
  }

  startGame() {
    this.gameService.initializeGameBoard(this.row, this.columns, this.cardSize);
  }
}
