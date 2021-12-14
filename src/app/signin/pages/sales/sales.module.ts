import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SalesComponent, FormSearchComponent],
  imports: [CommonModule, SalesRoutingModule, SharedModule, FormsModule],
})
export class SalesModule {}
