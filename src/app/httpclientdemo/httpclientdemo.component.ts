import { Component } from '@angular/core';
import { User } from '../lifecycle/Model/Types';
import { UserapiService } from './services/userapi.service';

@Component({
  selector: 'demo-app-httpclientdemo',
  templateUrl: './httpclientdemo.component.html',
  styleUrls: ['./httpclientdemo.component.scss'],
})
export class HttpclientdemoComponent {
  users: User[] = [];

  constructor(private userService: UserapiService) {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (err: Error) => {}
    );
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(
      (data) => {
        console.log(data);
        this.getUsers();
      },
      (err: Error) => {}
    );
  }

  updateUsername(user: User) {
    this.users = this.users.filter((u) => u.id != user.id);
    this.userService
      .updateUsername(user.id, this.getUsernameToUpdate(user.username))
      .subscribe(
        (data) => {
          //this.getUsers();
          this.users = [...this.users, data].sort((u1, u2) => u1.id - u2.id);
        },
        (err: Error) => {
          alert(`${user.name} User not updated.`);
          this.users = [...this.users, user].sort((u1, u2) => u1.id - u2.id);
        }
      );
  }

  getUsernameToUpdate(currentUsername: string): string {
    if (currentUsername.endsWith('Updated')) {
      var lastIndex = currentUsername.lastIndexOf(' ');

      return currentUsername.substring(0, lastIndex);
    }
    return currentUsername + ' Updated';
  }
}
