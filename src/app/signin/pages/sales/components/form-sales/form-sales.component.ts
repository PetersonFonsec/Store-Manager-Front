import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ISalleCreate } from '../../interfaces/sales';
import { Observable } from 'rxjs';
import { IProduct } from '../../../products/interfaces/products';
import { ProductService } from '../../../products/services/product/product.service';

@Component({
  selector: 'app-form-sales',
  templateUrl: './form-sales.component.html',
  styleUrls: ['./form-sales.component.scss'],
})
export class FormSalesComponent implements OnInit {
  @Output() submit = new EventEmitter<ISalleCreate>();
  @Input() loading = false;
  iconClose = faTimes;
  products$: Observable<IProduct[]>;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

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
