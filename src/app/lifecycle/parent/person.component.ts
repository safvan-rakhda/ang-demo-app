import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HeaderComponent } from 'src/app/header/header.component';
import { Person } from '../Model/Types';

@Component({
  selector: 'demo-app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit, AfterViewInit {
  personList: Person[] = [];
  selectedPerson: Person | undefined;
  @ViewChild(HeaderComponent)
  headerComp!: HeaderComponent;

  constructor() {
    this.personList = [
      {
        name: 'John Smith',
        age: 32,
        gender: 'male',
        occupation: 'software engineer',
        location: 'San Francisco, CA',
      },
      {
        name: 'Emily Johnson',
        age: 28,
        gender: 'female',
        occupation: 'marketing manager',
        location: 'New York, NY',
      },
      {
        name: 'David Lee',
        age: 40,
        gender: 'male',
        occupation: 'entrepreneur',
        location: 'Los Angeles, CA',
      },
      {
        name: 'Sophia Kim',
        age: 25,
        gender: 'female',
        occupation: 'graphic designer',
        location: 'Chicago, IL',
      },
      {
        name: 'Michael Davis',
        age: 50,
        gender: 'male',
        occupation: 'lawyer',
        location: 'Washington D.C.',
      },
    ];
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
