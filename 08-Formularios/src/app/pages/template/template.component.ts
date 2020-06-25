import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: 'M'
  };

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( paisesResp => {
      this.paises =  paisesResp;
      // Para agregar un valor por defecto
      this.paises.unshift({
        nombre: 'Seleccione un país',
        codigo: ''
      });
    });
  }


  guardar(f: NgForm) {
    if ( f.invalid ) {
      // Con esto validamos que todos los campos de un formulario no queden vacios
      Object.values( f.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    console.log(f);
    console.log(f.value);
  }

}
