import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-app-rxjsdemo',
  templateUrl: './rxjsdemo.component.html',
  styleUrls: ['./rxjsdemo.component.scss'],
})
export class RxjsdemoComponent {
  demoValue: string = '';

  demoObservable = new Observable<string>((observer) => {
    let i: number = 1;
    observer.next('Data no.' + i);
    setTimeout(() => {
      i += 1;
      observer.next('Data no.' + i);
    }, 1000);
    setTimeout(() => {
      i += 1;
      observer.next('Data no.' + i);
      observer.complete();
    }, 1000);
  });

  printValue() {
    this.demoObservable.subscribe((value) => {
      console.log(value);
    });
  }
}
