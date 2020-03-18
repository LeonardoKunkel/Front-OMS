import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PuntoCincoPage } from '../punto-cinco/punto-cinco.page';

@Component({
  selector: 'app-menu-punto5',
  templateUrl: './menu-punto5.page.html',
  styleUrls: ['./menu-punto5.page.scss'],
})
export class MenuPunto5Page implements OnInit {

  constructor(private navCtrl: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async goPuntoCinco() {
    const modal = await this.modalCtrl.create({
      component: PuntoCincoPage
    });
    console.log('Entraste a modal');
    return await modal.present();
  }
  goPuntoMatriz() {
    this.navCtrl.navigateForward('/punto-cinco-matriz')
  }
  goPuntoCincoProcedimiento() {
    this.navCtrl.navigateForward('/punto-cinco-procedimiento')
  }
  goPuntoCincoEvidencia(){
    this.navCtrl.navigateForward('/punto-cinco-evidencia')
  }
}
