import { PuntodosService } from './../../services/puntodos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPoliticaPage } from '../edit-politica/edit-politica.page';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { AlertController, IonSlides } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { MapaService } from 'src/app/services/mapa.service';

@Component({
  selector: 'app-punto-uno',
  templateUrl: './punto-uno.page.html',
  styleUrls: ['./punto-uno.page.scss'],
})
export class PuntoUnoPage implements OnInit {

  localizacion: any = {};

  constructor(private navCtrl: NavController) {  }

  ngOnInit() {
}
goPuntoProcedimiento() {
  this.navCtrl.navigateForward('/punto-uno-procedimiento')
}

goPuntoPolitica() {
  this.navCtrl.navigateForward('/punto-uno-politica')
}
goPuntoEvidencia() {
  this.navCtrl.navigateForward('/punto-uno-evidencia')
}
// getLocalitation() {
//   this.mapaService.getLocalitation().subscribe(( data:any ) => { 
//     this.localizacion = data;
//     console.log(this.localizacion);
//   });
// }
}