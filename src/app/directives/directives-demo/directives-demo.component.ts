import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss'],
})
export class DirectivesDemoComponent {
  isVisible: boolean = true;

  toggleisVisible = () => (this.isVisible = !this.isVisible);
}
