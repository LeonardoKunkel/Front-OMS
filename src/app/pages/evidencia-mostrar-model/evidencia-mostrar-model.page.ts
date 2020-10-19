import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-evidencia-mostrar-model',
  templateUrl: './evidencia-mostrar-model.page.html',
  styleUrls: ['./evidencia-mostrar-model.page.scss'],
})
export class EvidenciaMostrarModelPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async close(){
    this.modalCtrl.dismiss();
  }

}
