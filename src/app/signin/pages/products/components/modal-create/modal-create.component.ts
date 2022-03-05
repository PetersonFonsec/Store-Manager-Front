import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IProductCreate } from '../../interfaces/products';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnInit {
  @Output() submit = new EventEmitter<IProductCreate>();
  iconClose = faTimes;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      price_sale: [null, Validators.required],
      price_buy: [null, Validators.required],
      photo: [null],
      name: [null, Validators.required],
    });
  }

  _submit(): void {
    const form = this.form.getRawValue();
    this.submit.emit(form);
  }
}
