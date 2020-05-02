import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertController: AlertController) {

  }

  async agregarLista() {
    // console.log('Hola');
    // this.router.navigateByUrl('tabs/agregar');
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            console.log(data);
            if (data.titulo.lenght === 0 ) {
              return;
            }
            // Crear la lista
            const LISTAID = this.deseosService.crearLista( data.titulo);

            this.router.navigateByUrl(`/tabs/agregar/${ LISTAID }`);
          }
        }
      ]
    });

    await alert.present();
  }




}
