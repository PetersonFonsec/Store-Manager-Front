import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IProduct, IProductCreate } from '../../interfaces/products';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  @Output() create = new EventEmitter<IProductCreate>();
  @Input() product: IProduct | null = null;
  @Input() loading = false;
  iconClose = faTimes;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.setProduct();
  }

  setProduct() {
    if (!this.product) return;

    this.form.setValue({
      description: this.product.description,
      price_sale: this.product.price_sale,
      price_buy: this.product.price_buy,
      photo: this.product.photo,
      name: this.product.name,
    });
  }

  createForm() {
    this.form = this.formBuilder.group({
      description: [null, Validators.required],
      price_sale: [null, Validators.required],
      price_buy: [null, Validators.required],
      name: [null, Validators.required],
      photo: [null],
    });
  }

  _submit(): void {
    const form = this.form.getRawValue();
    const updatePhoto = !form.photo.file && this.product?.photo;
    if (updatePhoto) form.photo = this.product?.photo;

    this.create.emit(form);
  }
}
