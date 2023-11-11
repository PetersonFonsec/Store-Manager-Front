import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { IProduct } from './interfaces/products';
import { ProductService } from './services/product/product.service';
import { ProductActions } from './interfaces/products-actions.enum';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  dropdown = Object.values(ProductActions);
  subscription: Subscription | undefined;
  products$: Observable<IProduct[]>;
  table_header = ['Product', 'Description', 'Price buy', 'Price sale'];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private title: Title,
  ) {
    this.products$ = this.productService.getAll();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Products`);
    scrollToTop();
  }

  createItem(): void {
    this.openModal(ModalCreateComponent);
  }

  search(productName: string): void {
    this.products$ = this.productService.getBySearch(productName);
  }

  openModal(component: any, data?: IProduct) {
    this.subscription = this.dialog
      .open(component, { data })
      .afterClosed()
      .subscribe(() => {
        this.products$ = this.productService.getAll();
      });
  }

  action([action, item]: [ProductActions, IProduct]): void {
    switch (action) {
      case ProductActions.delete: {
        this.openModal(ModalDeleteComponent, item);
        break;
      }
      case ProductActions.update: {
        this.openModal(ModalUpdateComponent, item);
        break;
      }
    }
  }
}
