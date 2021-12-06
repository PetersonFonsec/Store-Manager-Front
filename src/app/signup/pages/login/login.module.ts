import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent, FormLoginComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
