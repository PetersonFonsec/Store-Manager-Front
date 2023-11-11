import { Component, OnDestroy, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { ProductService } from '../../services/product/product.service';
import { IProduct } from '../../interfaces/products';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public product: IProduct
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  deleteProduct(confirm: boolean) {
    if(!confirm) return this.dialog.closeAll();

    this.subscription = this.productService.delete(this.product._id).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Produto apagado com sucesso !!',
          description: 'O produto não deve estar na lista.'
        }));
      },
      error: ({ message, error }) => {
        this.loading = false;

        this.store.dispatch(showErrorMessage({
          title: error,
          description: message
        }));
      },
    })
  }
}
