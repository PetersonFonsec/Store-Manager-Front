import { Component, OnInit } from '@angular/core';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    scrollToTop();
  }
}
