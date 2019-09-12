import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-punto-siete',
  templateUrl: './punto-siete.page.html',
  styleUrls: ['./punto-siete.page.scss'],
})
export class PuntoSietePage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  segmentChanged(event) {
    const value = event.detail.value;
    if (value == "listaComunicacion") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(1);
      this.slider.lockSwipes(true);
    }
    else if (value == "procedimiento") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(0);
      this.slider.lockSwipes(true);
    }
    else if (value == "Quejas") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(2);
      this.slider.lockSwipes(true);
    }
    else if (value == "registro") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(3);
      this.slider.lockSwipes(true);
    }
    
  }

  async enviarLista(form) {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      message: '<strong>Son Correctos los Datos</strong>',
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
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async submitMethod(refForm) {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      message: '<strong>Enviar Queja o Sugerencia</strong>',
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
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async enviarRegistro(formR) {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      message: '<strong>Guardar Refgistro</strong>',
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
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  datosComunicacion() {}
}
