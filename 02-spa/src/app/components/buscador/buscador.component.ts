import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService    ) {
      // Con esto se recibe el parametro que se haya enviado
      this.activatedRoute.params.subscribe( params => {
        this.heroes = this.heroesService.buscarHeroe(params.term);
        this.termino = params.term;
        console.log(this.heroes);
      });
    }

  ngOnInit(): void {

  }
}
