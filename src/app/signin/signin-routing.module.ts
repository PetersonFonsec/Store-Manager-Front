import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
        data: {
          title: 'Dashboard',
        },
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            (m) => m.ProductsModule,
          ),
        data: {
          title: 'Produtos',
        },
      },
      {
        path: 'vendas',
        loadChildren: () =>
          import('./pages/sales/sales.module').then((m) => m.SalesModule),
        data: {
          title: 'Vendas',
        },
      },
      {
        path: 'fornecedores',
        loadChildren: () =>
          import('./pages/provides/provides.module').then(
            (m) => m.ProvidesModule,
          ),
        data: {
          title: 'Fornecedores',
        },
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('./pages/user/user.module').then((m) => m.UserModule),
        data: {
          title: 'Perfil do Usuario',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninRoutingModule {}
