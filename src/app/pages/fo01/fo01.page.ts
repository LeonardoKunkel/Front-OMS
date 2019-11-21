import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fo01',
  templateUrl: './fo01.page.html',
  styleUrls: ['./fo01.page.scss'],
})
export class FO01Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goAccesoriouno(){
    console.log('Entraste1')
    this.navCtrl.navigateForward('/fo01-motobombas')
  }

  goAccesoriodos(){
    console.log('Entraste2')
    this.navCtrl.navigateForward('/fo01-inventarios')
  }

  goAccesoriotres(){
    console.log('Entraste3')
    this.navCtrl.navigateForward('/fo01-contboq')
  }

  goAccesoriocuatro(){
    console.log('Entraste4')
    this.navCtrl.navigateForward('/fo01-vapores')
  }

  goAccesoriocinco(){
    console.log('Entraste5')
    this.navCtrl.navigateForward('/fo01-espacio')
  }

  goAccesorioseis(){
    console.log('Entraste6')
    this.navCtrl.navigateForward('/fo01-purga')
  }

  goAccesoriosiete(){
    console.log('Entraste7')
    this.navCtrl.navigateForward('/fo01-contremoto')
  }

  goAccesorioocho(){
    console.log('Entraste8')
    this.navCtrl.navigateForward('/fo01-nivel')
  }

  goAccesorionueve(){
    console.log('Entraste9')
    this.navCtrl.navigateForward('/fo01-pozos')
  }
}