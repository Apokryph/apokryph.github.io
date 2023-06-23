import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogService } from 'primeng/dynamicdialog';
import { HighscoreService } from '@apo/gamification';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf, AsyncPipe, ToastModule],
  providers: [MessageService, DialogService, HighscoreService],
  selector: 'apo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
}
