import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SigninComponent } from './signin.component';
import { SharedModule } from '../shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';
import { TokenInterceptor } from '../shared/interceptors/token/token.interceptor';

const TOKEN_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, SigninRoutingModule, SharedModule],
  exports: [SigninComponent],
  providers: [TOKEN_INTERCEPTOR_PROVIDER],
})
export class SigninModule {}
