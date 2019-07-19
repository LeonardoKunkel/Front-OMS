import { AyudaPage } from './../ayuda/ayuda.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalCtrl: ModalController) {}

  segmentChanged(event){
    console.log(event);
    
  }

  async abriAyuda() {
    const modal = await this.modalCtrl.create({
      component: AyudaPage
    });
    return await modal.present();
  }

}
