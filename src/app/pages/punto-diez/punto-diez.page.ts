import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-diez',
  templateUrl: './punto-diez.page.html',
  styleUrls: ['./punto-diez.page.scss'],
})
export class PuntoDiezPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoDiez01(){
    console.log('Hola mundo');

     this.navCtrl.navigateForward('/punto-diezfs19');
  }
  goPuntoDiez02(){
    console.log('Hola mundo2');

     this.navCtrl.navigateForward('/punto-diezfo09');
  }
}