import { Component, OnDestroy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/shared/stores/actions/message.actions';
import { Subscription } from 'rxjs';
import { ProviderService } from '../../services/providers/provider.service';
import { IProvider } from '../../interfaces/provider';

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
    private providerService: ProviderService,
    @Inject(MAT_DIALOG_DATA) public provider: IProvider,
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  deleteProvider(confirm: boolean) {
    if (!confirm) return this.dialog.closeAll();

    this.subscription = this.providerService
      .delete(this.provider._id)
      .subscribe({
        next: () => {
          this.dialog.closeAll();
          this.loading = false;

          this.store.dispatch(
            showSuccessMessage({
              title: 'Fornecedor apagado com sucesso !!',
              description: 'O fornecedor não deve estar na lista.',
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
