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
  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
  ) {}

  createProduct(product: IProductCreate): void {
    this.loading = true;
    this.subscription = this.productService.create(product).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;
      },
      error: ({ message }) => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
