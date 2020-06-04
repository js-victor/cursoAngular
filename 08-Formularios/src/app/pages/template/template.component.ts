import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  Usuario = {
    nombre: '',
    apellido: '',
    correo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  guardar(f: NgForm) {
    if ( f.invalid ) {
      // Con esto validamos que todos los campos de un formulario no queden vacios
      Object.values( f.controls ).forEach( control => {
        control.markAsTouched();
      })
      return;
    }
    console.log(f);
    console.log(f.value);
  }

}
