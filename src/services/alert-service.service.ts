import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlertServiceService {

  constructor() { }

  alertMessage = (): void => {
    alert('Hello World');
  }
}

