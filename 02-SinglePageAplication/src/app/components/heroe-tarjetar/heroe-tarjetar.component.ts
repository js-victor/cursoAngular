import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjetar',
  templateUrl: './heroe-tarjetar.component.html',
  styles: []
})
export class HeroeTarjetarComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;
  // @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    // this.heroeSeleccionado = new EventEmitter();

  }

  ngOnInit(): void {
  }

  verHeroe() {
    console.log( this.index);
    this.router.navigate(['heroe', this.index]);

    // Emitir evento hacia el padre que es Heroes Component
    // this.heroeSeleccionado.emit(this.index);

  }

}
