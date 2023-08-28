import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

/**
 * @description Get the error object to response
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(async (res: HttpErrorResponse) => {
        if (res.status === 401) {
          await this.authService.logout();
        }

        throw res.error;
      }),
    );
  }
}
