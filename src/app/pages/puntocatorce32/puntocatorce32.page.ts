import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Popover1Component } from 'src/app/components/popover1/popover1.component';


@Component({
  selector: 'app-puntocatorce32',
  templateUrl: './puntocatorce32.page.html',
  styleUrls: ['./puntocatorce32.page.scss'],
})
export class Puntocatorce32Page implements OnInit {

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
