import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];
  cargando = false;

  constructor( private heroesService: HeroesService) { }

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe( resp => {
      this.heroes = resp;
      this.cargando = false;
    });
  }

  borrarHeroe( heroe: HeroModel, i: number) {
    Swal.fire({
      title: 'Confirmación',
      text: `¿Esta seguro que desea borrar a ${heroe.nombre} permanentemente?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then( resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this.heroesService.deleteHeroe( heroe.id).subscribe();

      }
    });
  }

}
