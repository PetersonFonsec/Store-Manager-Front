import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-item',
  templateUrl: './generic-item.component.html',
  styleUrls: ['./generic-item.component.scss'],
})
export class GenericItemComponent {
  @Input() colspan = 1;
}
