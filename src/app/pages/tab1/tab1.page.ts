import { AyudaPage } from './../ayuda/ayuda.page';
import { EstacionServicioModelPage } from '../estacion-servicio-model/estacion-servicio-model.page';
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CalendarPage } from '../calendar/calendar.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  darkMode: boolean = false;
  constructor(
    private modalCtrl: ModalController,
    private navCtlr: NavController,
  ) {
    this.openModal();

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

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
  

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: EstacionServicioModelPage
    });
    //console.log('Entraste al modal');
    return await modal.present();
    
  }

  change(){
    this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');
  }
}