import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-32b8d.firebaseio.com';

  constructor( private http: HttpClient) { }

  crearHeroe( heroe: HeroModel ) {
    return this.http.post(`${ this.url }/heroes.json`, heroe).pipe(map( (resp: any) => {
      heroe.id = resp.name;
      return heroe;
    }));
  }

  actualizarHeroe( heroe: HeroModel ) {
    const heroeTem = { ...heroe };
    delete heroeTem.id;

    return this.http.put(`${ this.url }/heroes/${heroe.id}.json`, heroeTem);
  }
  getHeroe(id: string) {
    return this.http.get(`${ this.url }/heroes/${id}.json`);
  }

  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`).pipe(map( this.crearArreglo ));
  }


  deleteHeroe( id: string) {
    return this.http.delete(`${ this.url }/heroes/${id}.json`);

  }

  private crearArreglo( heroesObj: object) {
    const heroes: HeroModel[] = [];


    if ( heroesObj === null) { return []; }

    Object.keys( heroesObj).forEach( key => {
      const heroe: HeroModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;
  }


}
