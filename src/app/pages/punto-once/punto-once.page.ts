import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-once',
  templateUrl: './punto-once.page.html',
  styleUrls: ['./punto-once.page.scss'],
})
export class PuntoOncePage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnce01(){
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo01')
  }

  goPuntoOnce08(){
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo08')
  }

  goPuntoOnce05(){
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo05')
  }
}
