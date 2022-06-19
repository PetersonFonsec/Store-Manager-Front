import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base/base.service';

@Injectable()
export class SalleService extends BaseService {
  constructor(private http: HttpClient) {
    super('products', http);
  }
}
