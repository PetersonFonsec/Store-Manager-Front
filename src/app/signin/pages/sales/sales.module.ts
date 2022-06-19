import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormSalesComponent } from './components/form-sales/form-sales.component';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { SalleService } from './services/salle/salle.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablesSalesHeaderComponent } from './components/tables-sales-header/tables-sales-header.component';
import { TablesSalesItemComponent } from './components/tables-sales-item/tables-sales-item.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SalesComponent,
    FormSalesComponent,
    ModalCreateComponent,
    ModalUpdateComponent,
    TablesSalesHeaderComponent,
    TablesSalesItemComponent,
  ],
  providers: [SalleService],
  imports: [
    CommonModule,
    SalesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
})
export class SalesModule {}
