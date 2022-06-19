import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProductCreate } from '../../interfaces/products';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;
  errorMessage = '';

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
  ) {}

  createProduct(product: IProductCreate): void {
    this.loading = true;

    product.photo = product?.photo?.file;
    const productFormated = this.convertToFormData(product);

    this.subscription = this.productService.create(productFormated).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  convertToFormData(form: any) {
    let form_data = new FormData();

    for (let key in form) {
      form_data.append(key, form[key]);
    }
    return form_data;
  }
}
