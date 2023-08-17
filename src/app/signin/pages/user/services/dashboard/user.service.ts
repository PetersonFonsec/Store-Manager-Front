import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base/base.service';
import { updateProfile } from 'src/app/shared/stores/actions/user.actions';
import { UserState } from 'src/app/shared/stores/reducers/user.reducers';
import { IFormPasswordFields } from '../../components/form-password/form-password.component';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(private http: HttpClient, private store: Store<{ user: UserState }>) {
    super('users', http);
  }

  override update(id: string, params: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/${id}`, params).pipe(tap((user) => {
      this.store.dispatch(updateProfile(user));
    }));
  }

  updatePassword(id: string, params: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/updatePassword/${id}`, params).pipe(tap((user) => {
      this.store.dispatch(updateProfile(user));
    }));
  }
}
