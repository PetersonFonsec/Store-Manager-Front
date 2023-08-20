import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @Output() action = new EventEmitter<[any, any]>();
  @ContentChild(TemplateRef)
  templateRef!: TemplateRef<any>;
  @Input() itens$: Observable<any> = of('');
  @Input() headers: string[] = [];
  @Input() dropdown: string[] = [];
  @Input() domain = '';
  @Input() empty = '';
  optionsIcon = faEllipsisV;

  _action(action: any, item: any) {
    this.action.emit([action, item]);
  }
}
