import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-item-loading',
  templateUrl: './generic-item-loading.component.html',
  styleUrls: ['./generic-item-loading.component.scss'],
})
export class GenericItemLoadingComponent {
  @Input() colspan = 1;
}
