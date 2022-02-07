import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { IProduct } from './interfaces/products';
import { ProductService } from './services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll<IProduct[]>();
  }

  ngOnInit(): void {
    scrollToTop();
  }
}
