import { Component, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl | null | undefined;
  @Input() model: NgModel | null | undefined;
}
