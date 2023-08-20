import { Component, Input, Output, EventEmitter} from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { IProduct } from '../../interfaces/products';
import { ProductActions } from '../../interfaces/products-actions.enum';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss']
})
export class TableItemComponent {
  @Output() action = new EventEmitter<[ProductActions, IProduct]>();
  @Input() dropdown: string[] = [];
  @Input() product!: IProduct;
  optionsIcon = faEllipsisV;

  _action(action: ProductActions, item: IProduct){
    this.action.emit([action, item]);
  }
}
