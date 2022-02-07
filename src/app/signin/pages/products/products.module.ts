import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductService } from './services/product/product.service';
import { TablesProductsHeaderComponent } from './components/tables-products-header/tables-products-header.component';
import { TablesProductsItemComponent } from './components/tables-products-item/tables-products-item.component';

@NgModule({
  declarations: [
    ProductsComponent,
    TablesProductsHeaderComponent,
    TablesProductsItemComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [ProductsComponent],
  providers: [ProductService],
})
export class ProductsModule {}
