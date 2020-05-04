import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-quince',
  templateUrl: './punto-quince.page.html',
  styleUrls: ['./punto-quince.page.scss'],
})
export class PuntoQuincePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

  goQuinceProcedimiento() {
    this.navCtrl.navigateForward('/punto-quince-procedimiento');
  }

  goQuincePrograma() {
    this.navCtrl.navigateForward('/punto-quince-programa');
  }

  goQuincePlan() {
    this.navCtrl.navigateForward('/punto-quince-plan');
  }

  goQuinceInforme() {
    this.navCtrl.navigateForward('/punto-quince-informe');
  }

  goQuinceHallazgos() {
    this.navCtrl.navigateForward('/punto-quince-hallazgos');
  }

  goQuinceEvidencia() {
    this.navCtrl.navigateForward('/punto-quince-evidencia');
  }
}
