import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProviderService } from '../../services/providers/provider.service';
import { IProvidesCreate } from '../form-provides/form-provides.component';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnDestroy {
  subcription: Subscription | undefined;
  loading = false;

  constructor(
    private providerService: ProviderService,
    private dialog: MatDialog,
  ) {}

  createProvider(provider: IProvidesCreate): void {
    this.loading = true;

    this.subcription = this.providerService.update('22', provider).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
