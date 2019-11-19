import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Popover1Page } from '../popover1/popover1.page';

@Component({
  selector: 'app-fo01-motobombas',
  templateUrl: './fo01-motobombas.page.html',
  styleUrls: ['./fo01-motobombas.page.scss'],
})
export class Fo01MotobombasPage implements OnInit {

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {
  }

  async mostrarPop(event){

    const popover = await this.popoverCtrl.create({
      component : Popover1Page,
      translucent: true,
      componentProps: {},
      mode: 'ios',
      backdropDismiss: false,
      event

    });

     popover.present(); 

     const { data } = await popover.onDidDismiss();

     console.log('Padre:', data);

  }

}
