import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AsideComponent } from './components/aside/aside.component';
import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { InputPasswordComponent } from './components/inputs/input-password/input-password.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TablesProductsComponent } from './components/tables/tables-products/tables-products.component';
import { TablesProductsItemComponent } from './components/itens/tables-products-item/tables-products-item.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BadgeComponent } from './components/badge/badge.component';
import { TablesProductsHeaderComponent } from './components/itens/tables-products-header/tables-products-header.component';
import { ContainerComponent } from './components/container/container.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/itens/list-item/list-item.component';

@NgModule({
  declarations: [
    AsideComponent,
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    HeaderComponent,
    TablesProductsComponent,
    TablesProductsItemComponent,
    AvatarComponent,
    BadgeComponent,
    TablesProductsHeaderComponent,
    ContainerComponent,
    ListComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    AsideComponent,
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
    HeaderComponent,
    TablesProductsComponent,
    TablesProductsItemComponent,
    AvatarComponent,
    BadgeComponent,
    TablesProductsHeaderComponent,
    ContainerComponent,
    ListComponent,
    ListItemComponent,
  ],
})
export class SharedModule {}
