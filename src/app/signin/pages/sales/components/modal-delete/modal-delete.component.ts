import { Component, OnDestroy, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import {
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/shared/stores/actions/message.actions';
import { Subscription } from 'rxjs';
import { SalleService } from '../../services/salle/salle.service';
import { ISalle } from '../../interfaces/sales';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private salleService: SalleService,
    @Inject(MAT_DIALOG_DATA) public salle: ISalle,
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  deleteProvider(confirm: boolean) {
    if (!confirm) return this.dialog.closeAll();

    this.subscription = this.salleService.delete(this.salle._id).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(
          showSuccessMessage({
            title: 'Venda apagada com sucesso !!',
            description: 'O venda não deve estar na lista.',
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
}
