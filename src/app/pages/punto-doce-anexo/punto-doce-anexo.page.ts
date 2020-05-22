import { Component, OnInit } from '@angular/core';
import { AnexoModelPage } from '../anexo-model/anexo-model.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-punto-doce-anexo',
  templateUrl: './punto-doce-anexo.page.html',
  styleUrls: ['./punto-doce-anexo.page.scss'],
})
export class PuntoDoceAnexoPage implements OnInit {

  constructor( private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AnexoModelPage
    });
    console.log('Entraste a modala');
    return await modal.present();
  }
}
