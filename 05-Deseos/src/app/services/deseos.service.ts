import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
  }

  crearLista( titulo: string ) {
    const NUEVALISTA = new Lista(titulo);
    this.listas.push(NUEVALISTA);
    this.guardarStorage();
    return NUEVALISTA.id;
  }

  obtenerLista( id: string | number ) {
    id = Number(id);

    return this.listas.find( listaData  => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));

  }

  cargarStorage() {
    if (localStorage.getItem('data')) {

      this.listas = JSON.parse( localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
    }
}
