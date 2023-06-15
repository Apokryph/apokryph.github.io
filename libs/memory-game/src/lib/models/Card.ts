export class Card {
  content: string;
  flipped: boolean;

  constructor(content: string) {
    this.content = content;
    this.flipped = false;
  }
}
