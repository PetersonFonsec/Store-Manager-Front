import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordComponent } from './forget-password.component';
import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { FormForgetComponent } from './components/form-forget/form-forget.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SucessComponent } from './components/sucess/sucess.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormNewPasswordComponent } from './components/form-new-password/form-new-password.component';

@NgModule({
  declarations: [ForgetPasswordComponent, FormForgetComponent, SucessComponent, FormNewPasswordComponent],
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  exports: [ForgetPasswordComponent],
})
export class ForgetPasswordModule {}
