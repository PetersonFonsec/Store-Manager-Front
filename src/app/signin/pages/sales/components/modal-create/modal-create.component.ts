import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ISalleCreate } from '../../interfaces/sales';
import { SalleService } from '../../services/salle/salle.service';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private salleService: SalleService,
  ) {}

  createSale(product: ISalleCreate): void {
    this.loading = true;
    this.subscription = this.salleService.create(product).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Venda criada com sucesso !!',
          description: 'Uma nova venda foi criada com sucesso.'
        }));
      },
      error: ({ message, error }) => {
        this.loading = false;

        this.store.dispatch(showErrorMessage({
          title: error,
          description: message
        }));
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
