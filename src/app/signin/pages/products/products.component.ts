import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { IProduct } from './interfaces/products';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
  ) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit(): void {
    scrollToTop();
  }

  createItem(): void {
    this.dialog.open(ModalCreateComponent);
  }
}
