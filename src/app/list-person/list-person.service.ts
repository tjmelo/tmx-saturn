import { Injectable } from '@angular/core';
import { ENDPOINT } from '../constants';

interface Users {
  users: [];
}

@Injectable({
  providedIn: 'root'
})

export class ListPersonService {

  constructor() { }

  getPerson = async (): Promise<Users> => {
    const apiUsers = await fetch(ENDPOINT.GET)
    const users = await apiUsers.json()
    return users
  }
}
