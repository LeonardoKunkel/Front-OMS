import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-dieciseis',
  templateUrl: './punto-dieciseis.page.html',
  styleUrls: ['./punto-dieciseis.page.scss'],
})
export class PuntoDieciseisPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/elemento16-investigacion-accidentes');
  }

  goPuntoProcedimiento2() {
    this.navCtrl.navigateForward('/elemento16-arbol-fallas');
  }

  goPuntoFormato() {
    this.navCtrl.navigateForward('/elemento16-causa-raiz');
  }

  goPuntoComprobacion() {
    this.navCtrl.navigateForward('/elemento16-hipotesis-recomendaciones');
  }

  goPuntoEntrevista() {
    this.navCtrl.navigateForward('/elemento16-entrevista');
  }

  goPuntoEstadistica() {
    this.navCtrl.navigateForward('/elemento16-estadistica');
  }
  goEvidencia() {
    this.navCtrl.navigateForward('/punto-dieciseis-evidencia');
  }

}
