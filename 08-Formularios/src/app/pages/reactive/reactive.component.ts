import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private formBuilder: FormBuilder, private validadores: ValidadoresService) {
    this.crearFormulario();
    this.cargarData();
    this.crearListener();
   }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validadores.noHerrera]],
      pass1: ['', Validators.required],
      pass2: ['', Validators.required],
      correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      usuario: ['', , this.validadores.existeUsuario],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        colonia: ['', Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    }, {
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  cargarData() {

    // Con esta manera hay que rellenar todos los campos
    // this.forma.setValue({
    //   nombre: 'Victor Rigoberto',
    //   apellido: 'Jose',
    //   correo: 'jsvicctor@gmail.com ',
    //   direccion: {
    //     calle: 'Corregidora',
    //     colonia: 'Vicente Guerrero'
    //   }
    // });

    // Con esta forma solo rellenamos los necesarios
    this.forma.reset({
      nombre: 'Victor Rigoberto',
      apellido: 'Jose',
      correo: 'fernando@gmail.com ',
      pass1: '123',
      pass2: '123',
      direccion: {
        calle: 'Corregidora',
        colonia: 'Vicente Guerrero'
      }
    });

    // Para cargar la data al arreglo de pasatiempo

    // ['comer', 'dormir'].forEach( valor => this.pasatiempos.push( this.formBuilder.control(valor)) );
  }
  get nombreNoValido() {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get apellidoNoValido() {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }
  get correoNoValido() {
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }
  get pass1NoValido() {
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }
  get usuarioNoValido() {
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched;
  }
  get pass2NoValido() {
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return (pass1 === pass2) ? false : true;
    // return this.forma.get('pass1').invalid && this.forma.get('pass1').touched;
  }
  get calleNoValido() {
    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched;
  }
  get coloniaNoValido() {
    return this.forma.get('direccion.colonia').invalid && this.forma.get('direccion.colonia').touched;
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo() {
    this.pasatiempos.push( this.formBuilder.control('Nuevo elemento', Validators.required));
  }

  borrarPasatiempo( i: number) {
    this.pasatiempos.removeAt(i);
  }

  guardar() {
    if ( this.forma.invalid ) {
      return Object.values( this.forma.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values( control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAllAsTouched();
        }

      });
    }

    // Posteo de la informacion
    console.log(this.forma);
    // this.forma.reset();

  }

  crearListener() {
    // this.forma.valueChanges.subscribe( valor => {
    //   console.log(valor);
    // } );
    // this.forma.statusChanges.subscribe( status => { console.log(status); } );
    this.forma.get('nombre').valueChanges.subscribe( console.log);
  }

}
