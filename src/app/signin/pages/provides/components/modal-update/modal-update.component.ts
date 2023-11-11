import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProviderService } from '../../services/providers/provider.service';
import { IProvidesCreate } from '../form-provides/form-provides.component';
import {
  showErrorMessage,
  showSuccessMessage,
} from 'src/app/shared/stores/actions/message.actions';
import { IProvider } from '../../interfaces/provider';

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
    @Inject(MAT_DIALOG_DATA) public provider: IProvider,
  ) {}

  updateProvider(provider: IProvidesCreate): void {
    this.loading = true;

    provider.photo = provider?.photo?.file;
    const providerFormated = this.convertToFormData(provider);

    this.subcription = this.providerService
      .update(this.provider._id, providerFormated)
      .subscribe({
        next: () => {
          this.dialog.closeAll();
          this.loading = false;

          this.store.dispatch(
            showSuccessMessage({
              title: 'Fornecedor atualizado com sucesso !!',
              description: 'O fornecedor deve estar atualizado na lista.',
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

  convertToFormData(form: any) {
    let form_data = new FormData();

    for (let key in form) {
      form_data.append(key, form[key]);
    }
    return form_data;
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
