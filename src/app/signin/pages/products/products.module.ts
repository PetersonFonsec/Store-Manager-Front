import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product/product.service';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';
import { ERROR_INTERCEPTOR_PROVIDER } from 'src/app/app.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ModalCreateComponent,
    FormProductComponent,
    ModalUpdateComponent,
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
  providers: [ProductService, ERROR_INTERCEPTOR_PROVIDER],
})
export class ProductsModule {}
