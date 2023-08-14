import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      new_password: [null, Validators.required],
      confirm_password: [null, Validators.required],
      current_password: [null, Validators.required],
    });
  }

  _submit(): void {
    const form = this.form.getRawValue();
  }
}
