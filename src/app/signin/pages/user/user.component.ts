import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

import { UserState } from 'src/app/shared/stores/reducers/user.reducers';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { UserService } from './services/dashboard/user.service';
import { environment } from 'src/environments/environment';
import { InputPhotoValue } from 'src/app/shared/components/inputs/input-photo/input-photo.component';
import { IFormPasswordFields } from './components/form-password/form-password.component';
import { Store } from '@ngrx/store';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  subscription: Subscription | undefined;
  errorMessage = '';
  loading = false;
  loadingPassword = false;

  constructor(
    private title: Title,
    private userService: UserService,
    private store: Store,
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

  updatePassword(user: IFormPasswordFields): void {
    const { current_password, new_password: password, confirm_password, email} = user;
    this.loadingPassword = true;

    this.subscription = this.userService.updatePassword(user._id, {
      current_password, password, confirm_password, email
    }).subscribe({
      next: () => {
        this.loadingPassword = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Pefil atualizado com sucesso !!',
          description: 'Seu perfil esta atualizado com os novos dados.'
        }));
      },
      error: ({ message, error }) => {
        this.loadingPassword = false;

        this.store.dispatch(showErrorMessage({
          title: error,
          description: message
        }));
      },
    });
  }

  updateProfile(user: UserState & {photo: InputPhotoValue}): void {
    this.loading = true;

    const userUpdate = this.convertToFormData(user);
    this.subscription = this.userService.update(user._id, userUpdate).subscribe({
      next: () => {
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Senha atualizada com sucesso !!',
          description: 'No proximo login utilize a nova senha.'
        }));
      },
      error: ({ message, error}) => {
        this.errorMessage = message;
        this.loading = false;

        this.store.dispatch(showErrorMessage({
          title: error,
          description: message
        }));
      },
    });
  }
}
