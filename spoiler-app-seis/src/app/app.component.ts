import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // selector o componente
  templateUrl: './app.component.html', //estructura
  styleUrls: ['./app.component.css'] //estilos
})
export class AppComponent {
  nombre = 'Jaime';
  apellido = 'Yerovi';
  edad = 24;
  sueldo = 375;
  fechaNacimiento = new Date('1994');
  nombreBoton = 'CambiarColor';
  nombreClase = 'sa-titulo';
  cambiarClaseDeTitulo() {
    const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';

    if (nombreClaseEsTitulo){
      this.nombreClase= 'sa-subtitulo';
    }
    else {
      this.nombreClase= 'sa-titulo';
    }
  }

  aplicarClase(valorDelInput){

    this.nombreClase = valorDelInput;

  }
}
