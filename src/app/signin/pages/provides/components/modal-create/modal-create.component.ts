import { Component, OnDestroy } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Subscription } from 'rxjs';
import { ProviderService } from '../../services/providers/provider.service';
import { IProvidesCreate } from '../form-provides/form-provides.component';
import { showErrorMessage, showSuccessMessage } from 'src/app/shared/stores/actions/message.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnDestroy {
  subcription: Subscription | undefined;
  loading = false;
  errorMessage = '';

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private providerService: ProviderService,
  ) {}

  createProvider(provider: IProvidesCreate): void {
    this.loading = true;

    provider.photo = provider?.photo?.file;
    const productFormated = this.convertToFormData(provider);

    this.subcription = this.providerService.create(productFormated).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;

        this.store.dispatch(showSuccessMessage({
          title: 'Fornecedor criado com sucesso !!',
          description: 'O novo fornecedor deve estar na lista.'
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
    this.subcription?.unsubscribe();
  }

  convertToFormData(form: any) {
    let form_data = new FormData();

    for (let key in form) {
      form_data.append(key, form[key]);
    }
    return form_data;
  }
}
