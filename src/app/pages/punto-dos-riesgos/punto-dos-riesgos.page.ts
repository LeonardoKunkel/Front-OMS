import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-dos-riesgos',
  templateUrl: './punto-dos-riesgos.page.html',
  styleUrls: ['./punto-dos-riesgos.page.scss'],
})
export class PuntoDosRiesgosPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor() { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  goBack() {
    this.slider.lockSwipes(false);
    this.slider.slidePrev();
    this.slider.lockSwipes(true);
  }

  goNext(){
    this.slider.lockSwipes(false);
    this.slider.slideNext();
    this.slider.lockSwipes(true);
  }

}
