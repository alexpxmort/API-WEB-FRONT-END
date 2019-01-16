
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebserviceService } from './webservice.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpontuacaoComponent } from './formpontuacao/formpontuacao.component';

@NgModule({
  declarations: [
    AppComponent,
    FormpontuacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WebserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
