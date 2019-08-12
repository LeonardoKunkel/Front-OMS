import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedimiento-cinco',
  templateUrl: './procedimiento-cinco.page.html',
  styleUrls: ['./procedimiento-cinco.page.scss'],
})
export class ProcedimientoCincoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed' : true
    });
  }
}
