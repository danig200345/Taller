import { AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs';
import { LoginService } from '../services/login.service';

export class CustomValidators {
  constructor() { }
  // Validador para el nombre de usuario
  static userName(control: AbstractControl): ValidationErrors | null {
    const user = control.value;

    if (!user || user.length < 3) {
      return { userName: 'El nombre de usuario debe tener al menos 3 caracteres.' };
    }

    return null;
  }

  // Validador para la contraseña
  static password(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]).*$/;

    if (!password || password.length < 8 || !passwordRegex.test(password)) {
      return {
        password: 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un símbolo especial.'
      };
    }
    return null;
  }

}
