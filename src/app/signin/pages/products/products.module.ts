import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, FormSearchComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule, FormsModule],
  exports: [ProductsComponent],
})
export class ProductsModule {}
