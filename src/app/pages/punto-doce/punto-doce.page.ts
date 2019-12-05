import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-doce',
  templateUrl: './punto-doce.page.html',
  styleUrls: ['./punto-doce.page.scss'],
})
export class PuntoDocePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goDoceProcedimiento() {
    this.navCtrl.navigateForward('/punto-doce-procedimiento')
  }

  goDoceAnexo() {
    this.navCtrl.navigateForward('/punto-doce-anexo')
  }

  goDoceCarta() {
    this.navCtrl.navigateForward('/punto-doce-carta')
  }

  goDoceEvidencia() {
    this.navCtrl.navigateForward('/punto-doce-evidencia')
  }

}