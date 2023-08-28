import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidesRoutingModule } from './provides-routing.module';
import { ProvidesComponent } from './provides.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProviderService } from './services/providers/provider.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormProvidesComponent } from './components/form-provides/form-provides.component';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';

@NgModule({
  declarations: [
    ProvidesComponent,
    FormProvidesComponent,
    ModalCreateComponent,
    ModalUpdateComponent,
    ModalDeleteComponent,
  ],
  imports: [
    CommonModule,
    ProvidesRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [ProviderService],
})
export class ProvidesModule {}
