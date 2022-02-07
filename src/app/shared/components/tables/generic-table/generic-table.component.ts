import { Component, Input } from '@angular/core';
import {
  faAngleLeft,
  faAngleRight,
  faFilter,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @Input() domain = '';
  sortIcon = faSortAmountUp;
  nextIcon = faAngleRight;
  prevIcon = faAngleLeft;
  filterIcon = faFilter;
}
