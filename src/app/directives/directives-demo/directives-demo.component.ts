import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.scss'],
})
export class DirectivesDemoComponent {
  isVisible: boolean = true;
  dummyArray: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
  ];

  dropDownValues: { key: number; value: string }[] = [
    { key: 1, value: 'Box 1' },
    { key: 2, value: 'Box 2' },
    { key: 3, value: 'Both' },
  ];

  selectedValue: string = '';

  toggleisVisible = () => (this.isVisible = !this.isVisible);

  onDropdownSelectionChange(selected: any) {
    this.selectedValue = selected.value;
  }
}
