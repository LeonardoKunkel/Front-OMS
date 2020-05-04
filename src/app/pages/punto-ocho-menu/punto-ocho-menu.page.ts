import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-punto-ocho-menu',
  templateUrl: './punto-ocho-menu.page.html',
  styleUrls: ['./punto-ocho-menu.page.scss'],
})
export class PuntoOchoMenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goOchoLista() {
    this.navCtrl.navigateForward('/punto-ocho-lista');
  }

  goOchoProcedimiento() {
    this.navCtrl.navigateForward('/punto-ocho-procedimiento');
  }

  goOchoInstructivo() {
    this.navCtrl.navigateForward('/punto-ocho-inst');
  }

  goOchoDistribucion() {
    this.navCtrl.navigateForward('/punto-ocho-distribucion');
  }

  goOchoSolicitud() {
    this.navCtrl.navigateForward('/punto-ocho-solicitud');
  }
}
