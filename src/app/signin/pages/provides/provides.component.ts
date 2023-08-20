import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { IProvider } from './interfaces/provider';
import { ProviderService } from './services/providers/provider.service';
import { ProviderActions } from './interfaces/provider-actions.enum';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';

@Component({
  selector: 'app-provides',
  templateUrl: './provides.component.html',
  styleUrls: ['./provides.component.scss'],
})
export class ProvidesComponent implements OnInit {
  table_header = ['Provider', 'Email', 'Cellphone', 'Representante'];
  dropdown = Object.values(ProviderActions);
  subscription: Subscription | undefined;
  provider$: Observable<IProvider[]>;
  optionsIcon = faEllipsisV;

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

  openModal(component: any, data?: IProvider) {
    this.subscription = this.dialog
      .open(component, { data })
      .afterClosed()
      .subscribe(() => {
        this.provider$ = this.providerService.getAll();
      });
  }

  action([action, item]: [ProviderActions, IProvider]): void {
    switch (action) {
      case ProviderActions.delete: {
        this.openModal(ModalDeleteComponent, item);
        break;
      }
      case ProviderActions.update: {
        this.openModal(ModalUpdateComponent, item);
        break;
      }
    }
  }
}
