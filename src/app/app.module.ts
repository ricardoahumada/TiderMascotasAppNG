import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from '@angular/common/http';
import {FormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosComponent } from './candidatos/candidatos.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FavsComponent } from './favs/favs.component';
import { CanActivateGuard } from './guards/can-activate.guard';

const config: SocketIoConfig = { url: 'http://localhost:3000/animales', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponent,
    FavsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
    SocketIoModule.forRoot(config)
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
