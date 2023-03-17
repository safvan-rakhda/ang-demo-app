import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerText: string = '';
}
