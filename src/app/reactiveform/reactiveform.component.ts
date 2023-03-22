import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'demo-app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {
  testForm!: FormGroup;

  addressFormControlGroup: FormGroup = this.fb.group({
    addressLine1: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    city: [],
    state: [],
    country: [],
    zipCode: [],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.testForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [
        Validators.required,
        CustomValidator.validateDoB,
      ]),
      gender: [],
      haveAddress: [],
    });

    this.testForm.get('haveAddress')?.valueChanges.subscribe((checked) => {
      if (checked) {
        this.testForm.addControl('address', this.addressFormControlGroup);
      } else if (this.testForm.get('address')) {
        this.testForm.removeControl('address');
      }
    });
  }

  onSubmit() {
    //console.log(this.testForm.value); // this will not get default value
    console.log(this.testForm.getRawValue());
    this.resetForm();
  }

  resetForm() {
    this.testForm.reset();
  }
}
