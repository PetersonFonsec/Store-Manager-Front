import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuthResponse, ILoginParam, ISignupParam } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly urlApi = `${environment.urlApi}auth`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  set token(token: string) {
    localStorage.setItem(environment.token, token);
  }

  get token(): string {
    return localStorage.getItem(environment.token) ?? '';
  }

  private setToken<T>(response: any): T {
    this.token = response?.access_token;
    return response;
  }

  login(user: ILoginParam): Observable<IAuthResponse> {
    return this.httpClient
      .post<IAuthResponse>(`${this.urlApi}/login`, user)
      .pipe(map((response) => this.setToken<IAuthResponse>(response)));
  }

  signup(user: ISignupParam): Observable<IAuthResponse> {
    return this.httpClient
      .post(`${this.urlApi}/signup`, user)
      .pipe(map((response) => this.setToken<IAuthResponse>(response)));
  }

  async logout(): Promise<void> {
    localStorage.removeItem(environment.token);
    await this.router.navigateByUrl('/signup');
  }

  refresh(): Observable<any> {
    return this.httpClient.get(`${this.urlApi}/refresh`);
  }
}
