import { ChatServiceService } from './../../services/chat-service.service';
import { ModalController, IonCard } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  @ViewChild('card') card: IonCard;

  mensajes: any = [];
  mensajesSubscription: Subscription;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
   
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed' : true
    });
  }

  enviar() {}

}
