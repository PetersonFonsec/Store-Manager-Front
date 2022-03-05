import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Vendas`);
    scrollToTop();
  }
}
