import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-fs20-dispensarios',
  templateUrl: './fs20-dispensarios.page.html',
  styleUrls: ['./fs20-dispensarios.page.scss'],
})
export class Fs20DispensariosPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnceFs20(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/fs20')
  }
}
