import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Series } from '../models/series.interface';
import { SeriesService } from '../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  titulo="Lista de Capítulos";
  id = 0;
  serie!: Series;

  //http://localhost:4200/series/1

  paramsSubscription: Subscription = new Subscription;
  
  constructor(private route: ActivatedRoute,private servicio:SeriesService) { }
  
  ngOnInit(): void {

    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.serie=this.servicio.ObtenerUno(this.id);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}