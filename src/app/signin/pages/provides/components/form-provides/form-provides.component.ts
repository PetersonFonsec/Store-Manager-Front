import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InputPhotoValue } from 'src/app/shared/components/inputs/input-photo/input-photo.component';
import { IProvider } from '../../interfaces/provider';

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
  @Output() create = new EventEmitter<IProvidesCreate>();
  @Input() provider: IProvider | null = null;
  @Input() loading = false;
  closeIcon = faTimes;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.setProvider();
  }

  setProvider() {
    if (!this.provider) return;

    this.form.setValue({
      representative: this.provider.representative,
      celphone: this.provider.celphone,
      email: this.provider.email,
      photo: this.provider.photo,
      name: this.provider.name,
    });
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      representative: [null, Validators.required],
      celphone: [null, Validators.required],
      name: [null, Validators.required],
      photo: [null],
    });
  }

  _submit(): void {
    let form = this.form.value;
    const updatePhoto = !form.photo && this.provider?.photo;
    if (updatePhoto) form.photo = this.provider?.photo;
    this.create.emit(form);
  }
}
