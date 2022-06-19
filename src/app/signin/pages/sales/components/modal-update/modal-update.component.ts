import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ISalleCreate } from '../../interfaces/sales';
import { SalleService } from '../../services/salle/salle.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.scss'],
})
export class ModalUpdateComponent implements OnDestroy {
  subscription: Subscription | undefined;
  loading = false;

  constructor(private salleService: SalleService, private dialog: MatDialog) {}

  updateSale(sale: ISalleCreate): void {
    this.loading = true;
    this.subscription = this.salleService.update('22', sale).subscribe({
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
    this.subscription?.unsubscribe();
  }
}
