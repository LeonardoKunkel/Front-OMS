import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController , IonCard } from '@ionic/angular';

@Component({
  selector: 'app-estacion-servicio-model',
  templateUrl: './estacion-servicio-model.page.html',
  styleUrls: ['./estacion-servicio-model.page.scss'],
})
export class EstacionServicioModelPage implements OnInit {

  @ViewChild('card') card: IonCard;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed' : true
    });
  }

}
