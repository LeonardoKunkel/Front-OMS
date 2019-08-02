import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-politica',
  templateUrl: './edit-politica.page.html',
  styleUrls: ['./edit-politica.page.scss'],
})
export class EditPoliticaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  submitForm(formulario){
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: '¡Importante!',
      message: '<strong>Acabas de editar la política, la revisaremos y en un máximo de 24 horas se realizaran los cambios</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.closeModal();
          }
        }
      ]
    });
  
    await alert.present();
  }
}


