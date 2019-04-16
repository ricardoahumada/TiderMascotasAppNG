import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule  } from '@angular/forms';

import { ChatRoutingModule } from './chat-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { DocumentComponent } from './document/document.component';

@NgModule({
  declarations: [PrincipalComponent, DocumentComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
