import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
import { ISalle } from '../sales/interfaces/sales';
import { UserService } from './services/dashboard/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user$ = this.userService.getAll<ISalle>();

  constructor(
    private title: Title,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | User`);
    scrollToTop();
  }
}
