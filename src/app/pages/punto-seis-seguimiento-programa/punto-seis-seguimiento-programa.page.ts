import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-punto-seis-seguimiento-programa',
  templateUrl: './punto-seis-seguimiento-programa.page.html',
  styleUrls: ['./punto-seis-seguimiento-programa.page.scss'],
})
export class PuntoSeisSeguimientoProgramaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalCtrl.dismiss();
  }

}
