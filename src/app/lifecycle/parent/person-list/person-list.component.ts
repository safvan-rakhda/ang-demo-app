import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../Model/Types';

@Component({
  selector: 'demo-app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
})
export class PersonListComponent {
  @Input() people!: Person[];
  @Input() age = 0;

  @Output() personSelected = new EventEmitter<Person>();

  selectPersonFromChild(person: Person): void {
    this.personSelected.emit(person);
  }
}
