import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  // Asi se logra obtener el parametro de uns ruta padre

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe(parametroPadre => {
      console.log('Parametro Padre');
      console.log(parametroPadre);
    });
  }

  ngOnInit(): void {
  }

}
