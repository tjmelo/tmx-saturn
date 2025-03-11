import { Component, inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input-person',
  templateUrl: './input-person.component.html',
  styleUrl: './input-person.component.scss',
  providers: [CrudService],
  imports: [FormsModule]
})

export class InputPersonComponent {
  private readonly addPerson = inject(CrudService);
  name: string = '';

  add() {
    this.addPerson.toCreateUser({
      name: this.name,
    });
  }
}
