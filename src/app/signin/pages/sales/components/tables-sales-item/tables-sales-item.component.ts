import { Component, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ISalle } from '../../interfaces/sales';

@Component({
  selector: 'app-tables-sales-item',
  templateUrl: './tables-sales-item.component.html',
  styleUrls: ['./tables-sales-item.component.scss'],
})
export class TablesSalesItemComponent {
  @Input() salle!: ISalle;
  optionsIcon = faEllipsisV;
}
