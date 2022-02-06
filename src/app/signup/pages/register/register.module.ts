import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, FormRegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule, FormsModule],
})
export class RegisterModule {}
