import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-diez',
  templateUrl: './punto-diez.page.html',
  styleUrls: ['./punto-diez.page.scss'],
})
export class PuntoDiezPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  goDiezProcedimiento() {
    this.navCtrl.navigateForward('/punto-diez-procedimiento');
  }

  goDiezPersonal() {
    this.navCtrl.navigateForward('/punto-diez-personal');
  }

  goDiezTecnologia() {
    this.navCtrl.navigateForward('/punto-diez-tecnologia');
  }

  goDiezOperacion() {
    this.navCtrl.navigateForward('/punto-diez-operacion');
  }

  goDiezTrabajo() {
    this.navCtrl.navigateForward('/punto-diez-trabajo');
  }

}
