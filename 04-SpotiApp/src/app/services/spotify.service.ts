import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }
  getNewReleases() {

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDNQ6EhEU_-dPyqC4BzOJaLR3hhpy05jXxTZu1XwvwmUu0svwKJHEoC1cMG93bhEzHYeaG99wRRvSxQEiw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }
}
