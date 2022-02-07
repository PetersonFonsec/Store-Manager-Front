import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidesRoutingModule } from './provides-routing.module';
import { ProvidesComponent } from './provides.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableProvidesHeaderComponent } from './components/table-provides-header/table-provides-header.component';
import { TableProvidesItemComponent } from './components/table-provides-item/table-provides-item.component';
import { ProviderService } from './services/providers/provider.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProvidesComponent,
    TableProvidesHeaderComponent,
    TableProvidesItemComponent,
  ],
  imports: [
    CommonModule,
    ProvidesRoutingModule,
    SharedModule,
    FontAwesomeModule,
  ],
  providers: [ProviderService],
})
export class ProvidesModule {}
