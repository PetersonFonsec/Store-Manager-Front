import { Component, OnInit } from '@angular/core';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    scrollToTop();
  }
}
