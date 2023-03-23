import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  Self,
  Inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { MY_TOKEN } from '../../injectiontoken/demo.token';
import { Person } from '../Model/Types';
import { PersonService } from './services/person.service';

@Component({
  selector: 'demo-app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  providers: [PersonService],
})
export class PersonComponent implements OnInit, AfterViewInit {
  tokenValue: string = '';
  personList: Person[] = [];
  selectedPerson: Person | undefined;
  @ViewChild(HeaderComponent)
  headerComp!: HeaderComponent;
  ageFilter = new FormControl<number>(0);

  constructor(
    @Self() private personService: PersonService,
    @Inject(MY_TOKEN) private myTokenValue: string
  ) {
    this.personList = personService.getPersonList();
    this.tokenValue = myTokenValue;
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
