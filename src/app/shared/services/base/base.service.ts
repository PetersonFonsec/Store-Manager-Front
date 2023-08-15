import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected urlApi = environment.urlApi;

  constructor(
    @Inject('domain') private domain: string,
    private httpClient: HttpClient,
  ) {
    this.urlApi += domain;
  }

  getOne<TGetOne>(id: string): Observable<TGetOne> {
    return this.httpClient.get<TGetOne>(`${this.urlApi}/${id}`);
  }

  getAll<TGetAll>(): Observable<TGetAll> {
    return this.httpClient.get<TGetAll>(this.urlApi);
  }

  getBySearch<TGetAll>(term: string): Observable<TGetAll> {
    let url = this.urlApi;
    url += `?search=${term}`;
    return this.httpClient.get<TGetAll>(url);
  }

  create<TCreate, TParams>(params: TParams): Observable<TCreate> {
    return this.httpClient.post<TCreate>(this.urlApi, params);
  }

  update<TUpdate, TParams>(id: string, params: TParams): Observable<TUpdate> {
    return this.httpClient.put<TUpdate>(`${this.urlApi}/${id}`, params);
  }

  delete<TDelete, TParams>(id: string, params: TParams): Observable<TDelete> {
    return this.httpClient.delete<TDelete>(`${this.urlApi}/${id}`, params);
  }
}
