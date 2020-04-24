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

}
