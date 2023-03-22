import { AbstractControl } from '@angular/forms';

export class CustomValidator {
  static validateDoB(control: AbstractControl) {
    const dob = control.value as Date;
    if (dob > new Date()) return { invalidDoB: true };
    return null;
  }
}
