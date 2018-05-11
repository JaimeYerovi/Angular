import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeliculaBannerComponent } from './Peliculas/pelicula-banner/pelicula-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
