import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PuntoSeisSeguimientoProgramaPage } from '../punto-seis-seguimiento-programa/punto-seis-seguimiento-programa.page';

@Component({
  selector: 'app-punto-seis-menu',
  templateUrl: './punto-seis-menu.page.html',
  styleUrls: ['./punto-seis-menu.page.scss'],
})
export class PuntoSeisMenuPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }
  goPuntoPerfilPuesto() {
    this.navCtrl.navigateForward('/punto-seis');
  }
  goPuntoDeteccionNecesidaes() {
    this.navCtrl.navigateForward('/punto-seis-deteccion-necesidades');
  }
  goPuntoProgramaCapacitacion() {
    this.navCtrl.navigateForward('/punto-seis-programa-capacitacion');
  }
  async goPuntoSeguimientoPrograma() {
    this.navCtrl.navigateForward('/punto-seis-seguimiento-capacitacion');
  }
  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/punto-seis-procedimiento');
  }
  goPuntoCursos() {
    this.navCtrl.navigateForward('/punto-seis-cursos');
  }
  goPuntoEvidencia() {
    this.navCtrl.navigateForward('/punto-seis-evidencia');
  }
}
