import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InputPhotoValue } from 'src/app/shared/components/inputs/input-photo/input-photo.component';

export interface IProvidesCreate {
  representative: string;
  celphone: string;
  email: string;
  photo: InputPhotoValue;
  name: string;
}

@Component({
  selector: 'app-form-provides',
  templateUrl: './form-provides.component.html',
  styleUrls: ['./form-provides.component.scss'],
})
export class FormProvidesComponent implements OnInit {
  @Input() loading = false;
  @Output() create = new EventEmitter<IProvidesCreate>();
  form!: FormGroup;
  closeIcon = faTimes;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      representative: [null, Validators.required],
      celphone: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      photo: [null],
      name: [null, Validators.required],
    });
  }

  _submit(): void {
    const form = this.form.value;
    this.create.emit(form);
  }
}
