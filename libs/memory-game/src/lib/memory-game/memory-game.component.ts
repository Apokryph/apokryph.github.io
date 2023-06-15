import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'apo-memory-game',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgOptimizedImage, RouterLink],
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss'],
})
export class MemoryGameComponent {
  row = 4;
  columns = 4;
  contents = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  cards: Card[] = [];
  gameBoard: Card[][] = [];
  flippedCards: Card[] = [];
  matchedCards: Card[] = [];
  encodedImage$: Observable<string | null> = of(null);

  constructor(private http: HttpClient) {
    this.cards = this.shuffleCards(this.getDoubleCards(this.getImageUrls(8)));
    this.gameBoard = this.initializeGameBoard(
      this.row,
      this.columns,
      this.cards
    );
  }

  getImageUrls(size: number): string[] {
    const imageUrls = [];

    for (let i = 0; i < size; i++) {
      imageUrls.push(`https://picsum.photos/200/200?random=${i}`);
    }

    console.log('URLS: ', imageUrls);
    return imageUrls;
  }

  getDoubleCards(input: string[]): Card[] {
    return input.flatMap((letter) => [new Card(letter), new Card(letter)]);
  }

  shuffleCards(input: Card[]): Card[] {
    const output = [...input];
    for (let i = output.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [output[i], output[j]] = [output[j], output[i]];
    }
    return output;
  }

  initializeGameBoard(rows: number, columns: number, cards: Card[]): Card[][] {
    const gameBoard: Card[][] = new Array(rows)
      .fill(null)
      .map(() => new Array(columns).fill(new Card('')));
    let cardIndex = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        gameBoard[i][j] = cards[cardIndex++];
      }
    }
    return gameBoard;
  }

  flipCard(card: Card): void {
    if (
      !card.flipped &&
      this.flippedCards.length < 2 &&
      !this.matchedCards.includes(card)
    ) {
      card.flipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        if (this.flippedCards[0].content === this.flippedCards[1].content) {
          // Karten stimmen überein
          this.matchedCards.push(...this.flippedCards);
          this.flippedCards = [];

          // Überprüfe, ob alle Karten umgedreht wurden und das Spiel beendet ist
          if (this.matchedCards.length === this.cards.length) {
            console.log('Spiel beendet!');
          }
        } else {
          // Karten stimmen nicht überein
          setTimeout(() => {
            this.flippedCards.forEach((flippedCard) => {
              flippedCard.flipped = false;
            });
            this.flippedCards = [];
          }, 1000);
        }
      }
    }
  }
}

export class Card {
  content: string;
  flipped: boolean;

  constructor(content: string) {
    this.content = content;
    this.flipped = false;
  }
}
