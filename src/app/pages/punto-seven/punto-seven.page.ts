import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-seven',
  templateUrl: './punto-seven.page.html',
  styleUrls: ['./punto-seven.page.scss'],
})
export class PuntoSevenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

    goPuntoUno() {
    this.navCtrl.navigateForward('/punto-siete-procedimiento');
  }

  goPuntoDos() {
    this.navCtrl.navigateForward('/punto-siete-lista');
  }

  goPuntoTres() {
    this.navCtrl.navigateForward('/punto-siete-quejas');
  }

  goPuntoCuatro() {
    this.navCtrl.navigateForward('/punto-siete-registro');
  }

  goPuntoCinco() {
    this.navCtrl.navigateForward('/punto-siete-evidencia');
  }

}
