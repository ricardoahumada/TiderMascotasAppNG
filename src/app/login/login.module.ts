import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule  } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { InitComponent } from './init/init.component';

@NgModule({
  declarations: [InitComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
