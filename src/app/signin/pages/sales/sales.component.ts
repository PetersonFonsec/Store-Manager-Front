import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { scrollToTop } from 'src/app/shared/utils/scroll-to-top';
import { environment } from 'src/environments/environment';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { ISalle } from './interfaces/sales';
import { SalleService } from './services/salle/salle.service';
import { SalesActions } from './interfaces/sales-action.enum';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  table_header = ['Product', 'Price buy', 'Price sale', 'Date salle'];
  dropdown = Object.values(SalesActions);
  subscription: Subscription | undefined;
  salle$: Observable<ISalle[]>;
  optionsIcon = faEllipsisV;

  constructor(
    private salleService: SalleService,
    private dialog: MatDialog,
    private title: Title,
  ) {
    this.salle$ = this.salleService.getAll();
  }

  ngOnInit(): void {
    this.title.setTitle(`${environment.app_name} | Vendas`);
    scrollToTop();
  }

  createItem(): void {
    this.openModal(ModalCreateComponent);
  }

  openModal(component: any, data?: ISalle) {
    this.subscription = this.dialog
      .open(component, { data })
      .afterClosed()
      .subscribe(() => {
        this.salle$ = this.salleService.getAll();
      });
  }

  action([action, item]: [SalesActions, ISalle]): void {
    switch (action) {
      case SalesActions.delete: {
        this.openModal(ModalDeleteComponent, item);
        break;
      }
      case SalesActions.update: {
        this.openModal(ModalUpdateComponent, item);
        break;
      }
    }
  }
}
