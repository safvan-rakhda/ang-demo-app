import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/lifecycle/Model/Types';
import { UserapiService } from '../services/userapi.service';

@Component({
  selector: 'demo-app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent implements OnInit {
  //userId: number = 0; //Using snapshot
  userId = 0;
  userId$ = new Observable<number>();
  userForm!: FormGroup;
  showReset: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserapiService
  ) {
    //this.userId = this.router.snapshot.params['id'];
    this.userId$ = this.router.paramMap.pipe(
      map((p) => {
        return Number.parseInt(p.get('id') ?? '');
      })
    );
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', []),
      username: new FormControl('', []),
      email: new FormControl('', []),
      phone: new FormControl('', []),
    });
    this.userId = Number.parseInt(
      this.router.snapshot.paramMap.get('id') ?? '0'
    );
    if (this.userId > 0) this.setForm(this.userId);
  }

  setForm(userId: number) {
    this.userForm.reset();
    this.userService.getUserById(userId).subscribe((data) => {
      const users = data as Array<User>;
      this.userForm.patchValue(users[0]);
      this.showReset = true;
    });
  }
}
