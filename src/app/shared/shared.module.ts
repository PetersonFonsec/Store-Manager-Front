import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AsideComponent } from './components/aside/aside.component';
import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/inputs/input-text/input-text.component';
import { InputPasswordComponent } from './components/inputs/input-password/input-password.component';

@NgModule({
  declarations: [
    AsideComponent,
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    AsideComponent,
    ButtonComponent,
    InputTextComponent,
    InputPasswordComponent,
  ],
})
export class SharedModule {}
