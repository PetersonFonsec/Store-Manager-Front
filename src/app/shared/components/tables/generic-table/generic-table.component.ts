import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { showErrorMessage } from 'src/app/shared/stores/actions/message.actions';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit {
  @Output() action = new EventEmitter<[any, any]>();
  @ContentChild(TemplateRef)
  templateRef!: TemplateRef<any>;
  @Input() itens$: Observable<any> = of('');
  @Input() headers: string[] = [];
  @Input() dropdown: string[] = [];
  @Input() domain = '';
  @Input() empty = '';
  optionsIcon = faEllipsisV;
  itens: any = null;

  constructor(private store: Store) {}

  _action(action: any, item: any) {
    this.action.emit([action, item]);
  }

  ngOnInit(): void {
    this.itens$.subscribe({
      next: (response) => (this.itens = response),
      error: ({ message, error }) => {
        this.store.dispatch(
          showErrorMessage({
            title: error,
            description: message,
          }),
        );
      },
    });
  }
}
