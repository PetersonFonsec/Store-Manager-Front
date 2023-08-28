import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error/error.interceptor';
import { TokenInterceptor } from './token/token.interceptor';

export const ERROR_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};

const TOKEN_INTERCEPTOR_PROVIDER = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};

@NgModule({
  providers: [ERROR_INTERCEPTOR_PROVIDER, TOKEN_INTERCEPTOR_PROVIDER],
})
export class InterceptorModule {}
