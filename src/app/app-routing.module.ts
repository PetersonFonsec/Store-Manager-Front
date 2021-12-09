import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'area-logada',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupModule),
  },
  {
    path: 'area-logada',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
