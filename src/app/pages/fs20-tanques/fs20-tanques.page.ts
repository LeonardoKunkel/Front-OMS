import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fs20-tanques',
  templateUrl: './fs20-tanques.page.html',
  styleUrls: ['./fs20-tanques.page.scss'],
})
export class Fs20TanquesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goPuntoOnceFs20(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/fs20')
  }

}
