import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';

@NgModule({
  declarations: [RegisterComponent, FormRegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule],
})
export class RegisterModule {}
