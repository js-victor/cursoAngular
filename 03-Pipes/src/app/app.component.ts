import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  nombre = 'Capitan America';
  nombre2= 'vIcToR rIgObErTo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  porcentaje = 0.234;
  idioma = 'fr';
  salario = 1234.5;
  fecha: Date = new Date();
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: '500',
    direccion: {
      calle: 'Primera',
      casa: '20'
    }
  };

  valorPromesa = new Promise<string>(( resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });


}
