import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { PuntoSeisSeguimientoProgramaPage } from '../punto-seis-seguimiento-programa/punto-seis-seguimiento-programa.page';

@Component({
  selector: 'app-punto-seis-menu',
  templateUrl: './punto-seis-menu.page.html',
  styleUrls: ['./punto-seis-menu.page.scss'],
})
export class PuntoSeisMenuPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

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
   const modal = await this.modalCtrl.create({
     component: PuntoSeisSeguimientoProgramaPage
   });
   console.log('Entraste a modal');
   return await modal.present();
  }
  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/punto-seis-procedimiento');
  }
  goPuntoEvidencia() {
    this.navCtrl.navigateForward('/punto-seis-evidencia');
  }
}
