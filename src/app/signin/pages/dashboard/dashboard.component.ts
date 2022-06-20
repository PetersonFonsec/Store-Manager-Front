import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
import { ISalle } from '../sales/interfaces/sales';
import { IDashboard } from './interfaces/dashboard';
import { DashboardService } from './services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboard$ = this.dashboardService.getAll<IDashboard>();

  constructor(
    private title: Title,
    private dashboardService: DashboardService,
  ) {}

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Dashboard`);
    scrollToTop();
  }
}
