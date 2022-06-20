import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
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
    private title: Title,
  ) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Products`);
    scrollToTop();
  }

  createItem(): void {
    this.dialog
      .open(ModalCreateComponent)
      .afterClosed()
      .subscribe(() => {
        this.products$ = this.productService.getAll();
      });
  }

  search(productName: string): void {
    this.products$ = this.productService.getBySearch(productName);
  }
}
