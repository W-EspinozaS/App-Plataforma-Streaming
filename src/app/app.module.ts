import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeSeriesComponent } from './lista-de-series/lista-de-series.component';
import { SeriesComponent } from './series/series.component';
import { CapitulosComponent } from './capitulos/capitulos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SeriesModule } from './series/series.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeSeriesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SeriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
