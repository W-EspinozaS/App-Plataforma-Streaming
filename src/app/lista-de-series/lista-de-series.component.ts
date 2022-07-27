import { Component, OnInit } from '@angular/core';
import { Series } from '../models/series.interface';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-lista-de-series',
  templateUrl: './lista-de-series.component.html',
  styleUrls: ['./lista-de-series.component.css']
})
export class ListaDeSeriesComponent implements OnInit {

  titulo:string='Administración de Series'

  serie:Series[]=[];

  constructor(private servicio: SeriesService) { } 

  ngOnInit(): void {

    this.serie=this.servicio.ListadoSeries();
  }

}
