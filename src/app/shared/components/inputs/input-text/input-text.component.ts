import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
    },
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() label = '';
  @Input() id = '';
  val = '';

  ngOnInit(): void {}

  onChange: any = () => {};

  onTouched: any = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    if (!val) return;

    this.val = val;
    this.onChange(val);
    this.onTouched(val);
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
