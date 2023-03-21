import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  isLoggedIn: boolean = false;

  constructor() {}

  login(username: string, password: string) {
    if (username === 'admin@gmail.com' && password === 'admin123')
      return (this.isLoggedIn = true);
    else return (this.isLoggedIn = false);
  }
}
