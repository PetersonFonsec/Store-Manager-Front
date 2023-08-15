import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { UserState } from 'src/app/shared/stores/reducers/user.reducers';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { UserService } from './services/dashboard/user.service';
import { environment } from 'src/environments/environment';
import { InputPhotoValue } from 'src/app/shared/components/inputs/input-photo/input-photo.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  subscription: Subscription | undefined;
  errorMessage = '';
  loading = false;

  constructor(
    private title: Title,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | User`);
    scrollToTop();
  }

  convertToFormData(form: any) {
    let form_data = new FormData();

    for (let key in form) {
      form_data.append(key, form[key]);
    }
    return form_data;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  updateProfile(user: UserState & {photo: InputPhotoValue}): void {
    this.loading = true;

    const userUpdate = this.convertToFormData(user);
    this.subscription = this.userService.update(user._id, userUpdate).subscribe({
      next: () => {
        this.loading = false;
      },
      error: ({ message }) => {
        this.errorMessage = message;
        this.loading = false;
      },
    });
  }
}
