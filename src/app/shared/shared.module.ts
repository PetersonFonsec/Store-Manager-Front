import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { AsideComponent } from './components/aside/aside.component';
import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { InputPasswordComponent } from './components/inputs/input-password/input-password.component';
import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { ContainerComponent } from './components/container/container.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/itens/list-item/list-item.component';
import { ErrorMessagePipe } from './pipes/error-message/error-message.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { AlertComponent } from './components/alert/alert.component';
import { GenericTableComponent } from './components/tables/generic-table/generic-table.component';
import { GenericItemComponent } from './components/itens/generic-item/generic-item.component';
import { GenericItemLoadingComponent } from './components/itens/generic-item-loading/generic-item-loading.component';
import { FormSearchComponent } from './components/forms/form-search/form-search.component';
import { InputPhotoComponent } from './components/inputs/input-photo/input-photo.component';
import { InputCurrencyComponent } from './components/inputs/input-currency/input-currency.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './stores/reducers/user.reducers';

export const options: null | Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AsideComponent,
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    HeaderComponent,
    AvatarComponent,
    BadgeComponent,
    ContainerComponent,
    ListComponent,
    ListItemComponent,
    ErrorMessagePipe,
    ErrorMessageComponent,
    AlertComponent,
    GenericTableComponent,
    GenericItemComponent,
    GenericItemLoadingComponent,
    FormSearchComponent,
    InputPhotoComponent,
    InputCurrencyComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    StoreModule.forFeature('user', userReducer)
  ],
  exports: [
    AsideComponent,
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    HeaderComponent,
    AvatarComponent,
    BadgeComponent,
    ContainerComponent,
    ListComponent,
    ListItemComponent,
    ErrorMessagePipe,
    ErrorMessageComponent,
    AlertComponent,
    GenericTableComponent,
    GenericItemComponent,
    GenericItemLoadingComponent,
    FormSearchComponent,
    InputPhotoComponent,
    InputCurrencyComponent,
  ],
})
export class SharedModule {}
