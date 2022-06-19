import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ISalleCreate } from '../../interfaces/sales';
import { SalleService } from '../../services/salle/salle.service';

@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss'],
})
export class ModalCreateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(private salleService: SalleService, private dialog: MatDialog) {}

  createSale(product: ISalleCreate): void {
    this.loading = true;
    this.subscription = this.salleService.create(product).subscribe({
      next: () => {
        this.dialog.closeAll();
        this.loading = false;
      },
      error: ({ message }) => {
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
