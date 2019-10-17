import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-trece',
  templateUrl: './punto-trece.page.html',
  styleUrls: ['./punto-trece.page.scss'],
})
export class PuntoTrecePage implements OnInit {

  constructor( private navCtrl:NavController) { }

  ngOnInit() {
  }
  goFS25(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/p13-acta-conformacion')
  }
  goFS26(){
    this.navCtrl.navigateForward('/p13-programa-simulacros')
  }
  goFS27(){
    this.navCtrl.navigateForward('/p13-planeacion-simulacros')
  }
  goFS28(){
    this.navCtrl.navigateForward('/p13-evaluacion-simulacros')
  }
  goFS29(){
    this.navCtrl.navigateForward('/p13-planes-respuesta-emergencia')
  }
  goFS30(){
    this.navCtrl.navigateForward('/p13-reparacion-respuesta-emergencia')
  }

}
