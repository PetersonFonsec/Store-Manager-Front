import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface ISelectOptions {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent  implements OnInit, ControlValueAccessor {
  @Input() placeholder = '';
  @Input() error = false;
  @Input() label = '';
  @Input() options: ISelectOptions[] | null = [];
  inputValue = '';
  showOptions = false;
  val = '';

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


  constructor() { }

  ngOnInit(): void {}

  setValue(product: any) {
    this.showOptions = false;

    this.inputValue = product.label;
    this.value = product.value;
  }

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
