import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IAuthResponse,
  ILoginParam,
  IRecovertPasswordRequest,
  ISignupParam,
} from './auth.model';
import { Store } from '@ngrx/store';
import { enterApplication } from '../../stores/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly urlApi = `${environment.urlApi}auth`;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private store: Store,
  ) {}

  set token(token: string) {
    localStorage.setItem(environment.token, token);
  }

  get token(): string {
    return localStorage.getItem(environment.token) ?? '';
  }

  private setToken(response: IAuthResponse): IAuthResponse {
    this.token = response?.access_token;
    return response;
  }

  private setUser({ user }: IAuthResponse): void {
    this.store.dispatch(enterApplication(user));
  }

  private setEnviroment(response: IAuthResponse) {
    this.setUser(response);
    this.setToken(response);
    return response;
  }

  forget(email: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.urlApi}/forget`, {
      email,
    });
  }

  recovertPassword(
    token: string,
    payload: IRecovertPasswordRequest,
  ): Observable<boolean> {
    return this.httpClient.post<boolean>(
      `${this.urlApi}/recovertPassword/${token}`,
      payload,
    );
  }

  login(user: ILoginParam): Observable<IAuthResponse> {
    return this.httpClient
      .post<IAuthResponse>(`${this.urlApi}/login`, user)
      .pipe(map((response) => this.setEnviroment(response)));
  }

  signup(user: ISignupParam): Observable<IAuthResponse> {
    return this.httpClient
      .post<IAuthResponse>(`${this.urlApi}/signup`, user)
      .pipe(map((response) => this.setEnviroment(response)));
  }

  async logout(): Promise<void> {
    localStorage.removeItem(environment.token);
    localStorage.removeItem(environment.user);
    await this.router.navigateByUrl('/signup');
  }
}
