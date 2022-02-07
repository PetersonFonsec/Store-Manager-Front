import { Component, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from 'src/app/signin/pages/products/interfaces/products';

@Component({
  selector: 'app-tables-products-item',
  templateUrl: './tables-products-item.component.html',
  styleUrls: ['./tables-products-item.component.scss'],
})
export class TablesProductsItemComponent {
  @Input() product!: IProduct;
  optionsIcon = faEllipsisV;
}
