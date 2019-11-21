import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-diecisiete',
  templateUrl: './punto-diecisiete.page.html',
  styleUrls: ['./punto-diecisiete.page.scss'],
})
export class PuntoDiecisietePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goDiecisieteProcedimiento() {
    this.navCtrl.navigateForward('/punto-diecisiete-procedimiento');
  }

  goDiecisieteFormulario() {
    this.navCtrl.navigateForward('/punto-diecisiete-formulario');
  }

  goDiecisieteEvidencia() {
    this.navCtrl.navigateForward('/punto-diecisiete-evidencia')
  }

}