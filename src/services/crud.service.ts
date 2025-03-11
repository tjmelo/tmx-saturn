import { Injectable } from '@angular/core';
import { ENDPOINT } from '../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Person {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  constructor(private http: HttpClient) {}

  toCreateUser(user: any) {
    this.http.post(ENDPOINT.SOURCE, user).subscribe();
  }

  toReadUser = (): Observable<Person[]> => {
    return this.http.get<Person[]>(ENDPOINT.SOURCE);
  }

  toUpdateEditUser() {
    console.log('edit user');
  }

  toDeleteUser() {
    console.log('delete user');

  }
  
}
