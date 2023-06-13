import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnuncioFormComponent } from './anuncio-form/anuncio-form.component';
import { AnuncioListComponent } from './anuncio-list/anuncio-list.component';
import { AnuncioCardComponent } from './anuncio-card/anuncio-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AnuncioFormComponent,
    AnuncioListComponent,
    AnuncioCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
