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

  goPuntoUno(){
    this.navCtrl.navigateForward('/punto-uno')
  }

  goPuntoDos() {
    this.navCtrl.navigateForward('/punto-dos')
  }

  goPuntoTres() {
    this.navCtrl.navigateForward('/punto-tes')
  }

  goPuntoCuatro() {
    this.navCtrl.navigateForward('/punto-cuatro')
  }

  goPuntoCinco() {
    this.navCtrl.navigateForward('/punto-cinco')
  }

  goPuntoSeis() {
    this.navCtrl.navigateForward('/punto-seis');
  }

  goPuntoSiete() {
    this.navCtrl.navigateForward('/punto-siete');
  }

  goPuntoOcho() {
    this.navCtrl.navigateForward('/punto-ocho-menu');
  }

  goPuntoNueve() {
    this.navCtrl.navigateForward('/punto-nueve');
    console.log('entraste a la página 9')
  }

  goPuntoDiez(){
    this.navCtrl.navigateForward('/punto-diez');
    console.log('entraste a la página X')
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
    console.log('entraste a la página XIV')
  }

  goPuntoDieciseis() {
    this.navCtrl.navigateForward('/punto-dieciseis');
    console.log('entraste a la página XVI')
  }

goPuntoDiecisiete() {
  this.navCtrl.navigateForward('/punto-diecisiete');
}

}