import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Injectable({
  providedIn: 'root',
})
export class UserdetailGuard implements CanDeactivate<UserdetailsComponent> {
  constructor(private _snackBar: MatSnackBar) {}

  canDeactivate(
    component: UserdetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.userForm.pristine) return true;
    else {
      this._snackBar.open('Form is altered, please reset!!', 'Close');
      return false;
    }
  }
}
