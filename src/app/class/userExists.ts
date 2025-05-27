import { AbstractControl } from "@angular/forms";
import { AuthService } from "../services/auth.service";
import { catchError, debounceTime, map, of } from "rxjs";
import { LoginService } from "../services/login.service";

export class AsyncValidators {
  static userExists(auth: AuthService) {
    return (control: AbstractControl) => {
      return auth.Valid(control.value).pipe(
        map(() => true),
        catchError(exists => {
          return of(exists ? { userExists: 'El usuario ya existe' } : null);
        })
      );

    }
  }
  static userMatch(getUser: LoginService) {
    return (control: AbstractControl) => {
      return getUser.getUsers(control.value).pipe(
        map(() => true),
        catchError(exists => {
          return of(exists ? { userMatch: 'El usuario no existe' } : null);
        }
        )
      )
    }
  }


  ;
}

