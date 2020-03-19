import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-nueve',
  templateUrl: './punto-nueve.page.html',
  styleUrls: ['./punto-nueve.page.scss'],
})
export class PuntoNuevePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goNueveProcedimiento() {
    this.navCtrl.navigateForward('/punto-nueve-procedimiento');
  }

  goNueveListado() {
    this.navCtrl.navigateForward('/punto-nueve-listado');
  }

}
