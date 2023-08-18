import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProviderService } from '../../services/providers/provider.service';
import { IProvidesCreate } from '../form-provides/form-provides.component';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnDestroy {
  subcription: Subscription | undefined;
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private providerService: ProviderService,
  ) {}

  createProvider(provider: IProvidesCreate): void {
    this.loading = true;

    this.subcription = this.providerService.update('22', provider).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Fornecedor atualizado com sucesso !!',
          description: 'O fornecedor deve estar atualizado na lista.'
        }));
      },
      error: ({ message, error}) => {
        this.loading = false;

        this.store.dispatch(showErrorMessage({
          title: error,
          description: message
        }));
      },
    });
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
