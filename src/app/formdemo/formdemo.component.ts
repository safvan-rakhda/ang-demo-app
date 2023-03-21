import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../lifecycle/Model/Types';

@Component({
  selector: 'demo-app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.scss'],
})
export class FormdemoComponent {
  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    phone: 0,
  };

  onSubmit(formUser: NgForm) {
    alert('submited!');
    formUser.reset();
  }
}
