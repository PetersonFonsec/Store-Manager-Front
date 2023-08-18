import { Component, OnInit } from '@angular/core';
import { UserState } from '../shared/stores/reducers/user.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessageState } from '../shared/stores/reducers/message.reducers';
import { hideMessage } from '../shared/stores/actions/message.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  message$: Observable<MessageState>;
  user$: Observable<UserState>;

  constructor(private store: Store<{ user: UserState, message: MessageState }>) {
    this.message$ = store.select('message');
    this.user$ = store.select('user');
  }

  ngOnInit(): void {}

  hideMessage() {
    this.store.dispatch(hideMessage());
  }
}
