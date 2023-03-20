import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/lifecycle/Model/Types';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserapiService {
  apiBaseUrl = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getUsers$ = this.http.get<User[]>(this.apiBaseUrl).pipe(shareReplay(1));

  // Migrated this call to above stream and cached using shareReplay.
  // getUsers() {
  //   return this.http.get<User[]>(this.apiBaseUrl);
  // }

  deleteUser(id: number) {
    return this.http.delete(this.apiBaseUrl + id);
  }

  updateUsername(id: number, username: string) {
    return this.http.patch<User>(this.apiBaseUrl + id, { username: username });
  }
}
