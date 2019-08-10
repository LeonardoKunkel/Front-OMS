import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController, PopoverController } from '@ionic/angular';
import { OnbjetivoModalPage } from '../onbjetivo-modal/onbjetivo-modal.page';
import { Compiler_compileModuleAsync__POST_R3__ } from '@angular/core/src/linker/compiler';


@Component({
  selector: 'app-punto-cuatro',
  templateUrl: './punto-cuatro.page.html',
  styleUrls: ['./punto-cuatro.page.scss'],
})
export class PuntoCuatroPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor(
    private popoverCtrl: PopoverController
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

  async openModal(event) {
    const popover = await this.popoverCtrl.create({
      component: OnbjetivoModalPage,
      translucent: true,
      componentProps: {},
      event
    });

    popover.present();
  }
}
