import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/lifecycle/Model/Types';

@Injectable({
  providedIn: 'root',
})
export class UserapiService {
  apiBaseUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.apiBaseUrl);
  }

  deleteUser(id: number) {
    return this.http.delete(this.apiBaseUrl + id);
  }

  updateUsername(id: number, username: string) {
    return this.http.patch<User>(this.apiBaseUrl + id, { username: username });
  }
}
