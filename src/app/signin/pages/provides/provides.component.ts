import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
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
    private title: Title,
  ) {
    this.provider$ = this.providerService.getAll();
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Fornecedores`);
    scrollToTop();
  }

  showModal(): void {
    this.dialog
      .open(ModalCreateComponent)
      .afterClosed()
      .subscribe(() => {
        this.provider$ = this.providerService.getAll();
      });
  }

  search(providerName: string): void {
    this.provider$ = this.providerService.getBySearch(providerName);
  }
}
