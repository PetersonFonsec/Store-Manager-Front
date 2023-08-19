import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  @Output() confirm = new EventEmitter<boolean>();
  @Input() loading = false;
  iconClose = faTimes;

  constructor() { }

  ngOnInit(): void {}

  _confirm(confirm: boolean) {
    this.confirm.emit(confirm);
  }
}
