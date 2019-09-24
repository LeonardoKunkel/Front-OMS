import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-fs20-drenajes',
  templateUrl: './fs20-drenajes.page.html',
  styleUrls: ['./fs20-drenajes.page.scss'],
})
export class Fs20DrenajesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnceFs20(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/fs20')
  }

}
