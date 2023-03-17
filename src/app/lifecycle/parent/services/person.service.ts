import { Injectable } from '@angular/core';
import { Person } from '../../Model/Types';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personList: Person[] = [];
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

  getPersonList() {
    return this.personList;
  }
}
