import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tables-products-item',
  templateUrl: './tables-products-item.component.html',
  styleUrls: ['./tables-products-item.component.scss'],
})
export class TablesProductsItemComponent implements OnInit {
  optionsIcon = faEllipsisV;

  ngOnInit(): void {}
}
