import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ListPersonComponent } from './list-person/list-person.component';
import { InputPersonComponent } from './input-person/input-person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ListPersonComponent,
    InputPersonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'AngularProject';
}
