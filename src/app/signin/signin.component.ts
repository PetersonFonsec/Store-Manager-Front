import { Component, OnInit } from '@angular/core';
import { UserState } from '../shared/stores/reducers/user.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user$: Observable<UserState>;

  constructor(private store: Store<{ user: UserState }>) {
    this.user$ = store.select('user');
  }

  ngOnInit(): void {}
}
