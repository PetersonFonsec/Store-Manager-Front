import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidesRoutingModule } from './provides-routing.module';
import { ProvidesComponent } from './provides.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProvidesComponent],
  imports: [CommonModule, ProvidesRoutingModule, SharedModule],
})
export class ProvidesModule {}
