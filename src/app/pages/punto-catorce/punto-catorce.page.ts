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
    this.navCtrl.navigateForward('/puntocatorce32');
  }

  goPuntoCatorce02(){
    this.navCtrl.navigateForward('/puntocatorce31');
  }

  goPuntoCatorce03(){
    this.navCtrl.navigateForward('/puntocatorce30');
  }

  goPuntoCatorce04(){
    this.navCtrl.navigateForward('/puntocatorcefs29');
  }

  goPuntoCatorce05(){
    this.navCtrl.navigateForward('/punto-catorce-evidencia');
  }
}
