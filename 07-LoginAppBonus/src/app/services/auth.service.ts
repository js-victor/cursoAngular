import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apiKey = 'AIzaSyBBsnS8w4uZYfYh-d9YmerkULnaPW_zFTk';
  userToken: string;

  constructor(private httpClient: HttpClient) {
    this.leerToken();
  }

  login( usuario: UsuarioModel) {
    const authData = {
      // Le pasamos todos los parametros que recibimos al AuthData
      ...usuario,
      returnSecureToken: true
    };

    return this.httpClient.post(
    `${ this.url }/accounts:signInWithPassword?key=${ this.apiKey }`,
    authData
    ).pipe(
      map( (resp: any) => {
        console.log('Entro en el mapa');
        this.guardarToken(resp.idToken);
        return resp;
      } )
    );

  }
  logout() {
    localStorage.removeItem('token');
  }
  registrar( usuario: UsuarioModel ) {
    const authData = {
      // Le pasamos todos los parametros que recibimos al AuthData
      ...usuario,
      returnSecureToken: true
    };

    return this.httpClient.post(
    `${ this.url }/accounts:signUp?key=${ this.apiKey }`,
    authData
    );
  }

  private guardarToken( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem( 'token', idToken);
    const hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  leerToken() {
    if ( localStorage.getItem( 'token' ) ) {
      this.userToken = localStorage.getItem( 'token' );
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira') );
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    // if ( expiraDate > new Date() ){
    //   return true;
    // } else {
    //   return false;
    // }
    // lo de abajo es lo mismo

    return expiraDate > new Date() ? true : false;
  }

}
