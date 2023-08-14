import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProfileComponent } from './components/form-profile/form-profile.component';
import { FormPasswordComponent } from './components/form-password/form-password.component';

@NgModule({
  declarations: [UserComponent, FormProfileComponent, FormPasswordComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule, ReactiveFormsModule,
    FormsModule],
  exports: [UserComponent],
})
export class UserModule {}
