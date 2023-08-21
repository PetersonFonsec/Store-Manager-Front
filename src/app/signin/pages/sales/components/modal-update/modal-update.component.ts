import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ISalle, ISalleCreate } from '../../interfaces/sales';
import { SalleService } from '../../services/salle/salle.service';
import {
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/shared/stores/actions/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private salleService: SalleService,
    @Inject(MAT_DIALOG_DATA) public sale: ISalle,
  ) {}

  updateSale(sale: ISalleCreate): void {
    this.loading = true;
    this.subscription = this.salleService
      .update(this.sale._id, sale)
      .subscribe({
        next: () => {
          this.dialog.closeAll();
          this.loading = false;

          this.store.dispatch(
            showSuccessMessage({
              title: 'Venda atualizada com sucesso !!',
              description: 'Os dados da venda deve estar atualizado na lista.',
            }),
          );
        },
        error: ({ message, error }) => {
          this.loading = false;

          this.store.dispatch(
            showErrorMessage({
              title: error,
              description: message,
            }),
          );
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
