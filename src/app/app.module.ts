import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresaComponent } from './body/ingresa/ingresa.component';
import { TituloComponent } from './header/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    IngresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TituloComponent, IngresaComponent]
})
export class AppModule { }
