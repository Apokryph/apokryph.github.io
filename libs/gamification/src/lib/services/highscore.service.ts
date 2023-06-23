import { Injectable } from '@angular/core';
import { Highscore } from '../models/highscore';
import { first, Observable } from 'rxjs';
import {
  AngularFirestore,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Game } from '../models/game';
import { GameEndDialogComponent } from '../components/game-end-dialog/game-end-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class HighscoreService {
  endDialogRef: DynamicDialogRef | undefined;

  constructor(
    private readonly afs: AngularFirestore,
    private readonly messageService: MessageService,
    public dialogService: DialogService
  ) {}

  setHighscore(
    heightscore: Highscore
  ): Promise<DocumentReference<Highscore>> | null {
    return this.afs.collection<Highscore>('highscores').add(heightscore);
  }

  getHighscores(): Observable<Highscore[]> {
    return this.afs.collection<Highscore>('highscores').valueChanges();
  }

  showEndDialog(
    game: Game,
    score: number,
    header?: string,
    content?: string,
    saveSuccessMessage?: string,
    saveFailureMessage?: string
  ) {
    const dialogContent = content ?? '';
    const dialogHeader = header ?? 'Hurra! Gewonnen!';
    const dialogSuccessMessage =
      saveSuccessMessage ?? 'Dein Highscore wurde gespeichert!';
    const dialogFailMessage =
      saveFailureMessage ?? 'Leider ist ein Fehler beim Speichern aufgetreten.';

    this.endDialogRef = this.dialogService.open(GameEndDialogComponent, {
      header: dialogHeader,
      width: '80vw',
      draggable: false,
      resizable: false,
      position: 'top',
      data: {
        content: dialogContent,
      },
    });

    this.endDialogRef.onClose.pipe(first()).subscribe((result) => {
      if (result && result?.save && result?.name) {
        const highscore: Highscore = {
          name: result.name,
          note: result.note,
          score,
          game,
        };

        this.setHighscore(highscore)
          ?.then(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Hat geklappt!',
              detail: dialogSuccessMessage,
            });
          })
          .catch((error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Huch!',
              detail: dialogFailMessage,
            });
            console.log(error);
          });
      }
    });
  }
}
