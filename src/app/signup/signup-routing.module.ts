import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
      },
      {
        path: 'login',
        data: {
          title: 'Login',
        },
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        data: {
          title: 'Regsiter',
        },
        loadChildren: () =>
          import('./pages/register/register.module').then(
            (m) => m.RegisterModule,
          ),
      },
      {
        path: 'forget',
        data: {
          title: 'forget',
        },
        loadChildren: () =>
          import('./pages/forget-password/forget-password.module').then(
            (m) => m.ForgetPasswordModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
