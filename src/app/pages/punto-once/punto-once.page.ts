import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-once',
  templateUrl: './punto-once.page.html',
  styleUrls: ['./punto-once.page.scss'],
})
export class PuntoOncePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }

    goOnceProcedimiento() {
        this.navCtrl.navigateForward('/punto-once-procedimiento');
    }

    goOncePrograma() {
        this.navCtrl.navigateForward('/punto-once-programa');
    }

    goOncePlan() {
        this.navCtrl.navigateForward('/punto-once-plan');
    }

    goOnceLista() {
        this.navCtrl.navigateForward('/punto-once-lista');
    }

    goOnceEvidencia() {
        this.navCtrl.navigateForward('/punto-once-evidencia');
    }
}
