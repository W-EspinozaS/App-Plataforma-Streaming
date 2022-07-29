import { Injectable } from '@angular/core';
import { Series } from '../models/series.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series:Series[]=[
    {
      id:1,
      nombre:'Stranger Things',
      genero:'Miedo',
      plataforma:'Netflix',
      foto:'https://img.asmedia.epimg.net/resizer/aIDhXdjzgWVLHM-2TW4hZeV638U=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PDIKLJ7CEVPMDFA5DFPHI5Q5ZA.jpg',
      capitulos:[
        {id:1,nombre:'La desaparición de Will Byers',descripcion:'Will es testigo de algo horroroso cuando regresa a casa. Cerca de ahí, un laboratorio',duracion:'49m'},
        {id:2,nombre:'La loca de la calle Maple',descripcion:'Lucas, Mike y Dustin intentan hablar con una niña que encontraron. Joyce, muy ansiosa es interrogada',duracion:'56m'},
        {id:3,nombre:'Todo esta bien',descripcion:'Nancy, cada vez más preocupada busca a Barb y descubre lo que Jonathan está tramando',duracion:'52m'},
        {id:4,nombre:'El cuerpo',descripcion:'Joyce se rehusa a aceptar que Will está muerto y sigue intentando comunicarse con él. Mientras, los chicos ayudan a Once a cambiar de imagen',duracion:'51m'},
        {id:5,nombre:'La pulga y el acrobata',descripcion:'Hopper entra al laboratorio. Nancy y Jonathan enfrentan a lo que se llevó a Will, y los chicos le preguntan al señor Clarke cómo viajar a otra dimensión.',duracion:'53m'},
        {id:6,nombre:'El monstruo',descripcion:'Jonathan busca a Nancy en la oscuridad y Steve hace lo mismo. Hopper y Joyce descubren la verdad sobre los experimentos del laboratorio.',duracion:'47m'},
        {id:7,nombre:'La bañera',descripcion:'Once intenta llegar hasta Will, y Lucas advierte sobre algo terrible que se avecina. Nancy y Jonathan le muestran a la policía',duracion:'42m'},
        {id:8,nombre:'El otro lado',descripcion:'El doctor Brenner detiene a Hopper y Joyce para un interrogatorio. Los chicos esperan con Once en el gimnasio',duracion:'55m'},
      ],
    },
    {
      id:2,
      nombre:'Stranger Things 2',
      genero:'Miedo',
      plataforma:'Netflix',
      foto:'https://i.blogs.es/5b0845/stranger-things-2-poster-teaser-netflix/1366_2000.jpg',
      capitulos:[
        {id:1,nombre:'MADMAX',descripcion:'A unos días de Halloween, los chicos descubren que alguien superó su puntaje en las maquinitas, y Hopper investiga un suceso inusual',duracion:'48m'},
        {id:2,nombre:'Dulce o truco. Bicho raro',descripcion:'Will ve algo terrible en la noche de Halloween. Por su lado, Mike no pierde la esperanza de que Once esté cerca',duracion:'56m'},
        {id:3,nombre:'El renacuajo',descripcion:'Dustin adopta una mascota muy peculiar. Once se siente cada vez más impaciente con su situación',duracion:'51m'},
        {id:4,nombre:'Will, el sabio',descripcion:'La salud de Will empeora y Joyce se percata de la severidad del problema. Hopper intenta llegar hasta la raíz de la verdad',duracion:'46m'},
        {id:5,nombre:'Dig Dug',descripcion:'Nancy y Jonathan se acercan a un nuevo aliado que tiene su propia teoría sobre los eventos. Once indaga en su pasado',duracion:'58m'},
        {id:6,nombre:'El espia',descripcion:'El vínculo entre Will y el monstruo sombra se intensifica mientras todos se preguntan cómo detenerlo.',duracion:'52m'},
        {id:7,nombre:'La hermana pérdida',descripcion:'Tras una serie de visiones, Once se embarca en una búsqueda que termina lejos de Hawkins, donde conoce a un clan liderado por una chica',duracion:'48m'},
        {id:8,nombre:'El azotamentes',descripcion:'La situación en el Laboratorio Hawkins activa un protocolo de seguridad donde nadie puede salir del lugar',duracion:'48m'},
        {id:9,nombre:'El portal',descripcion:'Once sabe que la solución está en sus manos y debe terminar lo que inició, mientras los demás se arriesgan con un plan para sofocar a la sombra que posee a Will.',duracion:'1h 2m'},
      ],
    }
  ]

  constructor() { }

  ListadoSeries():Series[]{
    return this.series;
  }

  InsertarSerie(serie:Series){
    this.series.push(serie);
  }

  ObtenerUno(id:number):Series{
    
    return <Series>this.series.find(item=>item.id===id)

  }

}

