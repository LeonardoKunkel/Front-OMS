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

  goPuntoCinco() {
    this.navCtrl.navigateForward('/punto-cinco')
  }

}
