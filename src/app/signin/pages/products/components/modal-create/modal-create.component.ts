import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProductCreate } from '../../interfaces/products';
import { ProductService } from '../../services/product/product.service';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  errorMessage = '';
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private productService: ProductService,
  ) {}

  createProduct(product: IProductCreate): void {
    this.loading = true;

    product.photo = product?.photo?.file;
    const productFormated = this.convertToFormData(product);

    this.subscription = this.productService.create(productFormated).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Produto criado com sucesso !!',
          description: 'O produto deve estar na lista.'
        }));
      },
      error: ({ message, error }) => {
        this.errorMessage = message;
        this.loading = false;

        this.store.dispatch(showErrorMessage({
          title: error,
          description: message
        }));
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
