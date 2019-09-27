import { Component, OnInit ,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-fo01',
  templateUrl: './fo01.page.html',
  styleUrls: ['./fo01.page.scss'],
})
export class FO01Page implements OnInit {
  @ViewChild('slider') slider: IonSlides
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
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
