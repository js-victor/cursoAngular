import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }
  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQC0f16nQqYyQ5aKLrsA3Cyr9h7PPFQ4Ga2qaGgJOKJOSvmM7l9NRQvbLZwc0KIFMeMJnbLXipb2PN6dQcE'
    });

    return this.http.get(url, { headers });
  }



  getNewReleases() {

  return this.getQuery( 'browse/new-releases' ).pipe( map( (resp: any) => resp.albums.items));

  }
  getArtista( termino: string) {

    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` ).pipe( map( (resp: any) => resp.artists.items));


  }



}

