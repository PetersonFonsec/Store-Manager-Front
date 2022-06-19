import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ISalleCreate } from '../../interfaces/sales';

@Component({
  selector: 'app-form-sales',
  templateUrl: './form-sales.component.html',
  styleUrls: ['./form-sales.component.scss'],
})
export class FormSalesComponent implements OnInit {
  @Output() submit = new EventEmitter<ISalleCreate>();
  @Input() loading = false;
  iconClose = faTimes;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      product: [null, Validators.required],
      quantity: [null, Validators.required],
    });
  }

  _submit(): void {
    const form = this.form.getRawValue();
    this.submit.emit(form);
  }
}
