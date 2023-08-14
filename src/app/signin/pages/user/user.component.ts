import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserState } from 'src/app/shared/stores/reducers/user.reducers';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { UserService } from './services/dashboard/user.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$: Observable<UserState>;

  constructor(
    private title: Title,
    private userService: UserService,
    private store: Store<{ user: UserState }>
  ) {
    this.user$ = store.select('user');
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | User`);
    scrollToTop();
  }
}
