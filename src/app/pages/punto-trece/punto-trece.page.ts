import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-trece',
  templateUrl: './punto-trece.page.html',
  styleUrls: ['./punto-trece.page.scss'],
})
export class PuntoTrecePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goTreceProcedimiento() {
    this.navCtrl.navigateForward('/punto-trece-procedimiento');
  }

  goTrecePlanes() {
    this.navCtrl.navigateForward('/punto-trece-planes');
  }

  goTreceEvaluacion() {
    this.navCtrl.navigateForward('/punto-trece-evaluacion');
  }

  goTrecePlaneacion() {
    this.navCtrl.navigateForward('/punto-trece-planeacion');
  }

  goTrecePrograma() {
    this.navCtrl.navigateForward('/punto-trece-programa');
  }

  goTreceActa() {
    this.navCtrl.navigateForward('/punto-trece-acta');
  }

}
