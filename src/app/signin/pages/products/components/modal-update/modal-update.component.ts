import { Component, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IProduct, IProductCreate } from '../../interfaces/products';
import { ProductService } from '../../services/product/product.service';
import {
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/shared/stores/actions/message.actions';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: IProduct,
  ) {}

  updateProduct(product: IProductCreate): void {
    this.loading = true;

    product.photo = product?.photo?.file;
    const productFormated = this.convertToFormData(product);

    this.subscription = this.productService
      .update(this.product._id, productFormated)
      .subscribe({
        next: () => {
          this.dialog.closeAll();
          this.loading = false;

          this.store.dispatch(
            showSuccessMessage({
              title: 'Produto atualizado com sucesso !!',
              description: 'O produto deve estar atualizado na lista.',
            }),
          );
        },
        error: ({ message, error }) => {
          this.loading = false;

          this.store.dispatch(
            showErrorMessage({
              title: error,
              description: message,
            }),
          );
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
