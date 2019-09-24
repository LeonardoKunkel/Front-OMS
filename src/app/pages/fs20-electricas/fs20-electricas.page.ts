import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-fs20-electricas',
  templateUrl: './fs20-electricas.page.html',
  styleUrls: ['./fs20-electricas.page.scss'],
})
export class Fs20ElectricasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnceFs20(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/fs20')
  }
}
