import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { IProvider } from './interfaces/provider';
import { ProviderService } from './services/providers/provider.service';

@Component({
  selector: 'app-provides',
  templateUrl: './provides.component.html',
  styleUrls: ['./provides.component.scss'],
})
export class ProvidesComponent implements OnInit {
  provider$: Observable<IProvider[]>;

  constructor(
    private providerService: ProviderService,
    private dialog: MatDialog,
  ) {
    this.provider$ = this.providerService.getAll();
  }

  ngOnInit(): void {
    scrollToTop();
  }

  showModal(): void {
    this.dialog.open(ModalCreateComponent);
  }
}
