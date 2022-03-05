import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProductsComponent } from './products.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductService } from './services/product/product.service';
import { TablesProductsItemComponent } from './components/tables-products-item/tables-products-item.component';
import { TablesProductsHeaderComponent } from './components/tables-products-header/tables-products-header.component';
import { ModalCreateComponent } from './components/modal-create/modal-create.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ModalUpdateComponent } from './components/modal-update/modal-update.component';

@NgModule({
  declarations: [
    ProductsComponent,
    TablesProductsHeaderComponent,
    TablesProductsItemComponent,
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
  providers: [ProductService],
})
export class ProductsModule {}
