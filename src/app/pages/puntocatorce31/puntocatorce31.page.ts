import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-puntocatorce31',
  templateUrl: './puntocatorce31.page.html',
  styleUrls: ['./puntocatorce31.page.scss'],
})
export class Puntocatorce31Page implements OnInit {

  constructor(
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  goAsea(){
    this.navCtrl.navigateForward('/catorce31asea')
  }
  goComision(){
    this.navCtrl.navigateForward('/catorce31comision')
  }
  goSecretaria(){
    this.navCtrl.navigateForward('/catorce31secretaria')
  }
  goSemarnat(){
    this.navCtrl.navigateForward('/catorce31semarnat')
  }
  goEstatal(){
    this.navCtrl.navigateForward('/catorce31legestatal')
  }
  goLocal(){
    this.navCtrl.navigateForward('/catorce31leglocal')
  }
}
