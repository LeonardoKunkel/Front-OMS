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
    this.navCtrl.navigateForward('/punto-ocho');
  }

  
  goPuntoOnce() {
    this.navCtrl.navigateForward('/punto-once');
  }
}
