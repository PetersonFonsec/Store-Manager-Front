import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';
@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, SigninRoutingModule, SharedModule],
  exports: [SigninComponent],
})
export class SigninModule {}
