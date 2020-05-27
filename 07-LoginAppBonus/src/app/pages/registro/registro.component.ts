import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  recuerdame = false;

  constructor( private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere porfavor...'
    });


    this.authService.registrar(this.usuario).subscribe( resp => {
      console.log(resp);
      Swal.close();
      this.router.navigateByUrl('/home');
      if ( this.recuerdame ) {
        localStorage.setItem('email', this.usuario.email);
      }
    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        title: 'Ocurrio un error al registrar',
        icon: 'error',
        text: err.error.error.message
      });
    } );
  }
}
