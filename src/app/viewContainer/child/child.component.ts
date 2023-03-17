import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  public isSwithON: boolean = true;
}
