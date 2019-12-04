import { AyudaPage } from './../ayuda/ayuda.page';
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private modalCtrl: ModalController,
    private navCtlr: NavController
  ) {}

  segmentChanged(event){
    console.log(event); 
  }

  goToMapa() {
    this.navCtlr.navigateForward('/simple');
  }

  async abriAyuda() {
    const modal = await this.modalCtrl.create({
      component: AyudaPage
    });
    return await modal.present();
  }

  openCalendar() {
    this.navCtlr.navigateForward('/calendar')
  }

}