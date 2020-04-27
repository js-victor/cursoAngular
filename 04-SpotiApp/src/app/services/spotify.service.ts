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
      Authorization: 'Bearer BQBpNWpwtq6EobRufx3sdgYgw84wDKj6Ysp6bMNVAvTYnSxLKmNSIQ2c0r-j2QjxDhuqynA5BKgJ30yuCaE'
    });

    return this.http.get(url, { headers });
  }



  getNewReleases() {
  return this.getQuery( 'browse/new-releases' ).pipe( map( (resp: any) => resp.albums.items));
  }

  getArtistas( termino: string) {
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` ).pipe( map( (resp: any) => resp.artists.items));
  }

  getArtista( id: string) {
    return this.getQuery( `artists/${ id }` );
    // .pipe( map( (resp: any) => resp.artists.items));
  }

  getTopTraks( id: string) {
    return this.getQuery( `artists/${ id }/top-tracks?country=mx` ).pipe( map( (resp: any) => resp.tracks));
  }

}

