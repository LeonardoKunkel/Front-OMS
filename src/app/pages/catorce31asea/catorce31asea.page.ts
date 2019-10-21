import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Popover1Component } from 'src/app/components/popover1/popover1.component';


@Component({
  selector: 'app-catorce31asea',
  templateUrl: './catorce31asea.page.html',
  styleUrls: ['./catorce31asea.page.scss'],
})
export class Catorce31aseaPage implements OnInit {

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {
  }
  async mostrarPop(){

    const popover = await this.popoverCtrl.create({
      component: Popover1Component,
    });

    await popover.present();
  }
}
