import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeSeriesComponent } from './lista-de-series/lista-de-series.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [

  {path: '', component : ListaDeSeriesComponent},
  {path:'series', component : SeriesComponent},
  {path:'series/:id', component : SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
