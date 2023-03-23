import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../Model/Types';

@Pipe({
  name: 'filterAge',
})
export class FilterAgePipe implements PipeTransform {
  transform(value: Person[], age: number): Person[] {
    return value.filter((p) => p.age > age);
  }
}
