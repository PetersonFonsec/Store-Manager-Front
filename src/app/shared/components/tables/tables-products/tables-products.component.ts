import { Component, OnInit } from '@angular/core';
import {
  faSortAmountUp,
  faFilter,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tables-products',
  templateUrl: './tables-products.component.html',
  styleUrls: ['./tables-products.component.scss'],
})
export class TablesProductsComponent implements OnInit {
  sortIcon = faSortAmountUp;
  filterIcon = faFilter;
  nextIcon = faAngleRight;
  prevIcon = faAngleLeft;

  constructor() {}

  ngOnInit(): void {}
}
