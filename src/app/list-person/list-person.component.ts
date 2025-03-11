import { Component, inject, OnChanges, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CrudService } from '../../services/crud.service';
import { AlertServiceService } from '../../services/alert-service.service';

interface Person {
  id: number;
  username: string
  name: string;
  email: string;
}

@Component({
  selector: 'app-list-person',
  standalone: true,
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.scss',
  imports: [FormsModule],
  providers: [CrudService, AlertServiceService]
})

export class ListPersonComponent implements OnInit{
  private readonly alertService = inject(AlertServiceService);
  private readonly readPerson = inject(CrudService);
  private readonly listUsers = signal<Person[]>([]);

  ngOnInit() {
    this.getListPersonAPI();
  }

  getListPersonAPI = async (): Promise<any> => {
    this.readPerson.toReadUser().subscribe((users: any) => {
      return this.listUsers.set(users);
    });
  }
  
  toListPerson(): Person[] {
    return this.listUsers();
  }

  alert() {
    this.alertService.alertMessage();
  }

}
