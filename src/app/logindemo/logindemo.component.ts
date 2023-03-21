import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'demo-app-logindemo',
  templateUrl: './logindemo.component.html',
  styleUrls: ['./logindemo.component.scss'],
})
export class LogindemoComponent {
  user = { username: '', password: '' };

  constructor(
    private loginService: LoginserviceService,
    private router: Router
  ) {}

  validateCredentials() {
    if (this.loginService.login(this.user.username, this.user.password))
      this.router.navigate(['/directives']);
    else alert('wrong credentials!');
  }
}
