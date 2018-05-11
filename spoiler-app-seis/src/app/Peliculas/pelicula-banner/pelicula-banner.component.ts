import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {


  urlImagen ="https://i.blogs.es/669ebd/alicia-vikander-tomb-raider-1920x1200-1920x1080/450_1000.jpg";
  estado = "disponible";
  nombrePelicula = "Tom Rier";
  descripcionPelicula="alicia vander";



  constructor() { }

  ngOnInit() {



  }

}
