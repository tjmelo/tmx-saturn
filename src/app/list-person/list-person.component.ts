import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ListPersonService } from './list-person.service';
import { AlertServiceService } from '../../services/alert-service.service';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-list-person',
  standalone: true,
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.scss',
  imports: [FormsModule],
  providers: [ListPersonService, AlertServiceService]
})

export class ListPersonComponent {
  private readonly alertService = inject(AlertServiceService);
  private readonly listPersonService = inject(ListPersonService);
  private readonly listUsers = signal([]);

  ngOnInit() {
    this.getListPersonAPI();
  }
  
  getListPersonAPI = async (): Promise<void> => {
    const { users } =  await this.listPersonService.getPerson();
    this.listUsers.set(users);
  }

  toListPerson(): Person[] {
    return this.listUsers()
  }

  alert() {
    this.alertService.alertMessage();
  }

}
