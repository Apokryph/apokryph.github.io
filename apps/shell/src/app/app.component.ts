import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf],
  selector: 'apo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';
}
