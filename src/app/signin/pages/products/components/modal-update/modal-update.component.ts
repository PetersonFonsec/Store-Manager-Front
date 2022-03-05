import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IProductCreate } from '../../interfaces/products';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
  ) {}

  updateProduct(product: IProductCreate): void {
    this.loading = true;
    this.subscription = this.productService.update('22', product).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
