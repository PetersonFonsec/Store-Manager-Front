import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password.component';
import { FormForgetComponent } from './components/form-forget/form-forget.component';
import { FormNewPasswordComponent } from './components/form-new-password/form-new-password.component';

const routes: Routes = [
  {
    path: '',
    component: ForgetPasswordComponent,
    children: [
      {
        path: '',
        component: FormForgetComponent,
      },
      {
        path: ':token',
        component: FormNewPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPasswordRoutingModule {}
