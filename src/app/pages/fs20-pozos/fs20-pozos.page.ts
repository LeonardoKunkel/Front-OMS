import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fs20-pozos',
  templateUrl: './fs20-pozos.page.html',
  styleUrls: ['./fs20-pozos.page.scss'],
})
export class Fs20PozosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnceFs20(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/fs20')
  }
}
