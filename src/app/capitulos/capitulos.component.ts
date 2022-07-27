import { Component, Input, OnInit } from '@angular/core';
import { Capitulos } from '../models/capitulos.interface';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  foto="https://us.123rf.com/450wm/ihorsw/ihorsw1607/ihorsw160700016/62663942-plantilla-de-barras-negro-plana-reproductor-de-v%C3%ADdeo-para-su-dise%C3%B1o-de-moda-interfaz-de-flash-m%C3%ADnima.jpg?ver=6";

  @Input() capitulo!:Capitulos;
  
  constructor() { }

  ngOnInit(): void {
  }

}
