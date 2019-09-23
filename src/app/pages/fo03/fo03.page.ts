import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-fo03',
  templateUrl: './fo03.page.html',
  styleUrls: ['./fo03.page.scss'],
})
export class FO03Page implements OnInit {
  @ViewChild('slider') slider: IonSlides

  constructor() { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  goBack(){
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
