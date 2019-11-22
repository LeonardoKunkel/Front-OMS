import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-sasisopa',
  templateUrl: './menu-sasisopa.page.html',
  styleUrls: ['./menu-sasisopa.page.scss'],
})
export class MenuSasisopaPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

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
    this.navCtrl.navigateForward('/punto-cuatro-menu')
  }

  goPuntoCinco() {
    this.navCtrl.navigateForward('/menu-punto5')
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
  goPuntoNueve(){
    this.navCtrl.navigateForward('/punto-nueve');
    console.log('entraste a la página X')
  }
  goPuntoDiez(){
    this.navCtrl.navigateForward('/punto-diez');
    console.log('entraste a la página X')
  }
  
  goPuntoOnce() {
    this.navCtrl.navigateForward('/punto-once');
  }

  goPuntoCatorce() {
    this.navCtrl.navigateForward('/punto-catorce');
    console.log('entraste a la página XIV')
  }
  goPuntoQuince(){
    this.navCtrl.navigateForward('/punto15-menu');
  }
}
