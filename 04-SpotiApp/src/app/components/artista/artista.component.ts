import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private spotify: SpotifyService) {
    this.activatedRoute.params.subscribe( (resp: any) => {
      console.log(resp.id);
      this.getArtista( resp.id);
      this.getTopTracks( resp.id );
    });
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista( id ).subscribe(resp => {
      this.artista = resp;
      this.loading = false;
    } );
  }

  getTopTracks(id: string) {
    this.spotify.getTopTraks( id ).subscribe(resp => {
      this.topTracks = resp;
      console.log(this.topTracks);
      
    });
  }

}
