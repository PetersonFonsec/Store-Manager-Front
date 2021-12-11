import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidesComponent } from './provides.component';

const routes: Routes = [
  {
    path: '',
    component: ProvidesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidesRoutingModule {}
