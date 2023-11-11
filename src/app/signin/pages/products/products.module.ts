import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { ModalDeleteComponent } from './components/modal-delete/modal-delete.component';
import { ProductService } from './services/product/product.service';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products.component';
import { TableItemComponent } from './components/table-item/table-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ModalCreateComponent,
    FormProductComponent,
    ModalUpdateComponent,
    ModalDeleteComponent,
    TableItemComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  exports: [ProductsComponent],
  providers: [ProductService],
})
export class ProductsModule {}
