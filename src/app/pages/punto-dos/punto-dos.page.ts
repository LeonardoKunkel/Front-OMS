import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-dos',
  templateUrl: './punto-dos.page.html',
  styleUrls: ['./punto-dos.page.scss'],
})
export class PuntoDosPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  segmentChanged(event) {
    const value = event.detail.value;
    
    if(value === "form") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(1);
      this.slider.lockSwipes(true);
    } else if(value === "proced"){
      this.slider.lockSwipes(false);
      this.slider.slideTo(0);
      this.slider.lockSwipes(true);
    }
  }

  async send() {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      message: '<strong>¿Quieres continuar?</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.navigateForward('/punto-dos-riesgos');
          }
        }
      ]
    });

    await alert.present();
  }
}
