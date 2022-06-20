import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService extends BaseService {
  constructor(private http: HttpClient) {
    super('dashboard', http);
  }
}
