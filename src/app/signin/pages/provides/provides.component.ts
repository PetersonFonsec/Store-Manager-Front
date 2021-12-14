import { Component, OnInit } from '@angular/core';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';

@Component({
  selector: 'app-provides',
  templateUrl: './provides.component.html',
  styleUrls: ['./provides.component.scss'],
})
export class ProvidesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    scrollToTop();
  }
}
