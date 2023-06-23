import { Game } from './game';

export interface Highscore {
  name: string;
  note?: string;
  score: number;
  game: Game;
}
