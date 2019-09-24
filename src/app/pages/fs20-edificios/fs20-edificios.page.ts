import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fs20-edificios',
  templateUrl: './fs20-edificios.page.html',
  styleUrls: ['./fs20-edificios.page.scss'],
})
export class Fs20EdificiosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnceFs20(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/fs20')
  }

}
