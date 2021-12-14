import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidesRoutingModule } from './provides-routing.module';
import { ProvidesComponent } from './provides.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProvidesComponent, FormSearchComponent],
  imports: [CommonModule, ProvidesRoutingModule, SharedModule, FormsModule],
})
export class ProvidesModule {}
