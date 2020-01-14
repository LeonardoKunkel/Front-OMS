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
    this.navCtrl.navigateForward('/punto-dieciseis-procedimiento')
  }

  goPuntoProcedimiento2() {
    this.navCtrl.navigateForward('/punto-dieciseis-procedimiento2')
  }

  goPuntoEstadistica() {
    this.navCtrl.navigateForward('/punto-dieciseis-estadistica')
  }

  goPuntoRecomendaciones() {
    this.navCtrl.navigateForward('/punto-dieciseis-comprobacion')
  }

  goPuntoComprobacion() {
    this.navCtrl.navigateForward('/punto-dieciseis-comprobacion')
  }

  goPuntoEntrevista() {
    this.navCtrl.navigateForward('/punto-dieciseis-entrevista')
  }

  goPuntoFormato() {
    this.navCtrl.navigateForward('/punto-dieciseis-formato')
  }

  goPuntoEvidencia() {
    this.navCtrl.navigateForward('/punto-dieciseis-evidencia')
  }

}