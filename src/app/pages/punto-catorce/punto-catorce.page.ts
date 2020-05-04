import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-catorce',
  templateUrl: './punto-catorce.page.html',
  styleUrls: ['./punto-catorce.page.scss'],
})
export class PuntoCatorcePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goCatorceProcedimiento() {
    this.navCtrl.navigateForward('/punto-catorce-procedimiento');
  }

  goCatorcePrograma() {
    this.navCtrl.navigateForward('/punto-catorce-programa');
  }

  goCatorceResultado() {
    this.navCtrl.navigateForward('/punto-catorce-resultado');
  }

  goCatorceEvaluacion() {
    this.navCtrl.navigateForward('/punto-catorce-evaluacion');
  }

  goCatorcePlan() {
    this.navCtrl.navigateForward('/punto-catorce-plan');
  }

  goCatorceEvidencia() {
    this.navCtrl.navigateForward('/punto-catorce-evidencia');
  }
}
