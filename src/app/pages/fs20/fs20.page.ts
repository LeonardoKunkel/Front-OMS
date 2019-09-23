import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fs20',
  templateUrl: './fs20.page.html',
  styleUrls: ['./fs20.page.scss'],
})
export class Fs20Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }
  goPuntoOnceTs20Tanques(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/fs20-tanques')
  }
  goPuntoOnceTs20Dispensarios(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/fs20-dispensarios')
  }
  goPuntoOnceTs20Drenajes(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/fs20-drenajes')
  }
  goPuntoOnceTs20Electricas(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/fs20-electricas')
  }
  goPuntoOnceTs20Pozos(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/fs20-pozos')
  }
  goPuntoOnceTs20Edificios(){
    console.log('hola mundo');
    this.navCtrl.navigateForward('/fs20-edificios')
  }

}
