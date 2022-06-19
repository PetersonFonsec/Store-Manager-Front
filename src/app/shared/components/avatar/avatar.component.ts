import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  urlBase = environment.urlApi;
  @Input() avatar = '';
  @Input() name = '';
  @Input() prefix = '';
}
