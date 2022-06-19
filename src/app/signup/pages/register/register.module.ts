import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { FormRegisterComponent } from './components/form-register/form-register.component';

@NgModule({
  declarations: [RegisterComponent, FormRegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule, FormsModule],
})
export class RegisterModule {}
