import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
    },
  ],
})
export class InputPasswordComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder = '';
  @Input() error = false;
  @Input() label = '';
  @Input() id = '';
  type = 'text';
  icon = faEye;
  val = '';

  ngOnInit(): void {
    this.changeType();
  }

  changeType(): void {
    if (this.type === 'text') {
      this.type = 'password';
      this.icon = faEye;
    } else {
      this.type = 'text';
      this.icon = faEyeSlash;
    }
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    if (val !== undefined && val !== null) {
      this.val = val;
      this.onChange(val);
      this.onTouched(val);
    }
  }

  onBlur() {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
