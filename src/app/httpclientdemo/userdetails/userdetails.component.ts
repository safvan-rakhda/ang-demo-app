import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'demo-app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent {
  //userId: number = 0; //Using snapshot
  userId$ = new Observable<number>();

  constructor(private router: ActivatedRoute) {
    //this.userId = this.router.snapshot.params['id'];
    this.userId$ = this.router.paramMap.pipe(
      map((p) => {
        return Number.parseInt(p.get('id') ?? '');
      })
    );
  }
}
