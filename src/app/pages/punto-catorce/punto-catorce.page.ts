import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-catorce',
  templateUrl: './punto-catorce.page.html',
  styleUrls: ['./punto-catorce.page.scss'],
})
export class PuntoCatorcePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoCatorce01(){
    console.log('Hola mundo 1');

      this.navCtrl.navigateForward('/puntocatorce32');
  }
  goPuntoCatorce02(){
    console.log('Hola mundo 2');

      this.navCtrl.navigateForward('/puntocatorce31');
  }
  goPuntoCatorce03(){
    console.log('Hola mundo 3');

      this.navCtrl.navigateForward('/puntocatorce30');
  }
  goPuntoCatorce04(){
    console.log('Hola mundo 4');

      this.navCtrl.navigateForward('/puntocatorcefs29');
  }
}
