import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-sasisopa',
  templateUrl: './menu-sasisopa.page.html',
  styleUrls: ['./menu-sasisopa.page.scss'],
})
export class MenuSasisopaPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goFirmas() {
    this.navCtrl.navigateForward('/firmas');
  }
  goPuntoUno() {
    this.navCtrl.navigateForward('/punto-uno');
  }

  goPuntoDos() {
    this.navCtrl.navigateForward('/punto-dos');
  }

  goPuntoTres() {
    this.navCtrl.navigateForward('/punto-tes');
  }

  goPuntoCuatro() {
    this.navCtrl.navigateForward('/punto-cuatro');
  }

  goPuntoCinco() {
    this.navCtrl.navigateForward('/menu-punto5');
  }

  goPuntoSeis() {
    this.navCtrl.navigateForward('/punto-seis-menu');
  }

  goPuntoSiete() {
    this.navCtrl.navigateForward('/punto-siete-menu');
  }

  goPuntoOcho() {
    this.navCtrl.navigateForward('/punto-ocho-menu');
  }

  goPuntoNueve() {
    this.navCtrl.navigateForward('/punto-nueve');
  }

  goPuntoDiez(){
    this.navCtrl.navigateForward('/punto-diez');
  }

  goPuntoOnce() {
    this.navCtrl.navigateForward('/punto-once');
  }

  goPuntoDoce() {
    this.navCtrl.navigateForward('/punto-doce');
  }

  goPuntoTrece() {
    this.navCtrl.navigateForward('/punto-trece');
  }

  goPuntoCatorce() {
    this.navCtrl.navigateForward('/punto-catorce');
  }

  goPuntoQuince() {
    this.navCtrl.navigateForward('/punto-quince');
  }

  goPuntoDieciseis() {
    this.navCtrl.navigateForward('/punto-dieciseis');
  }

goPuntoDiecisiete() {
  this.navCtrl.navigateForward('/punto-diecisiete');
}

}