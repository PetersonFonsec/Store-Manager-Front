import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginRoutingModule } from './login-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent, FormLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
