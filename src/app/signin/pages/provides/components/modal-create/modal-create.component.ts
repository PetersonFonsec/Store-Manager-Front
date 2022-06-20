import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProviderService } from '../../services/providers/provider.service';
import { IProvidesCreate } from '../form-provides/form-provides.component';

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
    private providerService: ProviderService,
    private dialog: MatDialog,
  ) {}

  createProvider(provider: IProvidesCreate): void {
    this.loading = true;

    provider.photo = provider?.photo?.file;
    const productFormated = this.convertToFormData(provider);

    this.subcription = this.providerService.create(productFormated).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;
      },
      error: ({ message }) => {
        this.errorMessage = message;
        this.loading = false;
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
