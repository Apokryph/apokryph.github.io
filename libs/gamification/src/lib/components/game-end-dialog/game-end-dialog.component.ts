import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'apo-game-end-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    SharedModule,
    InputTextModule,
    ReactiveFormsModule,
    InputSwitchModule,
  ],
  templateUrl: './game-end-dialog.component.html',
  styleUrls: ['./game-end-dialog.component.scss'],
})
export class GameEndDialogComponent {
  @Output() newGameClicked = new EventEmitter<void>();

  highscoreForm = this.fb.group({
    name: [''],
    note: [''],
    shouldSave: false,
  });

  constructor(
    public readonly dialogConfig: DynamicDialogConfig,
    private readonly dialogRef: DynamicDialogRef,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    const result = this.highscoreForm.get('shouldSave')?.value
      ? {
          save: true,
          name: this.highscoreForm.get('name')?.value,
          note: this.highscoreForm.get('note')?.value,
        }
      : {
          save: false,
          name: undefined,
          note: undefined,
        };

    this.dialogRef.close(result);
  }
}
