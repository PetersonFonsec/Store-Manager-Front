import { Component, Input } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { IProvider } from '../../interfaces/provider';

@Component({
  selector: 'app-table-provides-item',
  templateUrl: './table-provides-item.component.html',
  styleUrls: ['./table-provides-item.component.scss'],
})
export class TableProvidesItemComponent {
  @Input() provider!: IProvider;
  optionsIcon = faEllipsisV;
}
