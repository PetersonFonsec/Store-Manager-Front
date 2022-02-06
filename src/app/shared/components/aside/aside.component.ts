import { Component } from '@angular/core';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { PageLink, pages } from 'src/app/data/pages';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  links: PageLink[] = pages;
  exitIcon = faDoorOpen;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
