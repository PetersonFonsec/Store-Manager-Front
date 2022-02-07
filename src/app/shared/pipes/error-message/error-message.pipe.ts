import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorMessage',
})
export class ErrorMessagePipe implements PipeTransform {
  transform(errorsObject: ValidationErrors | null | undefined): string {
    const allPossibleErrors: ValidationErrors = {
      required: 'Campo obrigatório',
      email: 'Email invalido',
    };

    if (!errorsObject) return '';
    const error = Object.keys(errorsObject)[0] ?? '';
    return allPossibleErrors[error] ?? 'Campo invalido';
  }
}
