import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageState, initialMessageState } from '../../stores/reducers/message.reducers';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() message: MessageState = initialMessageState;
  @Output() close = new EventEmitter()
  icon = faCheckCircle;
  iconClose = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  closeEvent() {
    this.close.emit()
  }
}
