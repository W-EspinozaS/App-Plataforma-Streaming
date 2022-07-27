import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { CapitulosComponent } from '../capitulos/capitulos.component';



@NgModule({
  declarations: [
    SeriesComponent,
    CapitulosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeriesModule { }
