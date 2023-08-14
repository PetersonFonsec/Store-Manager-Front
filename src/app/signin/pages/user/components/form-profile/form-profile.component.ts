import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {
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
