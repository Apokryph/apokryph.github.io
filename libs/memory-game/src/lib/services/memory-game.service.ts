import { Injectable } from '@angular/core';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root',
})
export class MemoryGameService {
  gameBoard: Card[][] = [];
  gameEnded = false;
  steps = 0;

  private cards: Card[] = [];
  private flippedCards: Card[] = [];
  private matchedCards: Card[] = [];

  initializeGameBoard(rows: number, columns: number, cardSize: number): void {
    this.cards = this.createCards(cardSize);
    this.gameBoard = this.createGameBoard(rows, columns);
    this.gameEnded = false;
    this.flippedCards = [];
    this.matchedCards = [];
    this.steps = 0;
  }

  private createCards(cardSize: number): Card[] {
    return this.shuffleCards(this.getDoubleCards(this.getImageUrls(cardSize)));
  }

  private getImageUrls(size: number): string[] {
    return Array.from(
      { length: size },
      () =>
        `https://picsum.photos/200/200?random=${Math.floor(
          Math.random() * 1000
        )}`
    );
  }

  private getDoubleCards(input: string[]): Card[] {
    return input.flatMap((letter) => [new Card(letter), new Card(letter)]);
  }

  private shuffleCards(input: Card[]): Card[] {
    const output = [...input];
    for (let i = output.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [output[i], output[j]] = [output[j], output[i]];
    }
    return output;
  }

  private createGameBoard(rows: number, columns: number): Card[][] {
    const gameBoard: Card[][] = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => new Card(''))
    );

    let cardIndex = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        gameBoard[i][j] = this.cards[cardIndex++];
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
        this.steps++; // Zähle einen Zug

        if (this.flippedCards[0].content === this.flippedCards[1].content) {
          // Karten stimmen überein
          this.matchedCards.push(...this.flippedCards);
          this.flippedCards = [];

          // Überprüfe, ob alle Karten umgedreht wurden und das Spiel beendet ist
          if (this.matchedCards.length === this.cards.length) {
            setTimeout(() => {
              this.gameEnded = true;
            }, 500);
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
