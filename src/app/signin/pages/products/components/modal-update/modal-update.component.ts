import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProductCreate } from '../../interfaces/products';
import { ProductService } from '../../services/product/product.service';
import { Store } from '@ngrx/store';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';

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
  ) {}

  updateProduct(product: IProductCreate): void {
    this.loading = true;
    this.subscription = this.productService.update('22', product).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Produto atualizado com sucesso !!',
          description: 'O produto deve estar atualizado na lista.'
        }));
      },
      error: ({ message, error }) => {
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
}
