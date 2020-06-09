import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private httpClient: HttpClient) { }

  getPaises() {
    // Obtenemos todos los paises
    return this.httpClient.get( 'https://restcountries.eu/rest/v2/lang/es' )
    // Filtramos el resultado para que solo tengamos nombre del pais y el codigo
    .pipe(
      map( (resp: any[]) =>
        resp.map( pais => ( { nombre: pais.name, codigo: pais.alpha3Code} ))
      )
    );
  }
}
