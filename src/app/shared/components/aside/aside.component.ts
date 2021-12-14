import { Component, OnInit } from '@angular/core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { PageLink, pages } from 'src/app/data/pages';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  links: PageLink[] = pages;
  exitIcon = faDoorOpen;

  ngOnInit(): void {}
}
