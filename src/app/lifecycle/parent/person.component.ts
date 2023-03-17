import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  Self,
} from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { Person } from '../Model/Types';
import { PersonService } from './services/person.service';

@Component({
  selector: 'demo-app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [PersonService],
})
export class PersonComponent implements OnInit, AfterViewInit {
  personList: Person[] = [];
  selectedPerson: Person | undefined;
  @ViewChild(HeaderComponent)
  headerComp!: HeaderComponent;

  constructor(@Self() private personService: PersonService) {
    this.personList = personService.getPersonList();
  }

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.headerComp);
    //Child componenet is no accessible here.
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ' + this.headerComp);
    this.headerComp.headerText = 'New header text';
  }

  setCurrentPerson(person: Person) {
    this.selectedPerson = person;
  }

  clearSelection(): void {
    this.selectedPerson = undefined;
  }

  addPerson() {
    const person: Person = {
      name: 'John Doe',
      age: 35,
      gender: 'male',
      occupation: 'test engineer',
      location: 'San Francisco, CA',
    };
    this.personList.push(person);
    //this.personList = [...this.personList, person];
  }
}
