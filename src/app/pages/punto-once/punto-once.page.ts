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
  goPuntoOnce01() {
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo01');
  }
  goPuntoOnce02() {
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fso02');
  }

  goPuntoOnce03() {
    this.navCtrl.navigateForward('/fo03');
  }

  goPuntoOnce04() {
    this.navCtrl.navigateForward('/fo04');
  }

  goPuntoOnce08() {
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo08');
  }

  goPuntoOnce05() {
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo05');
  }
  goPuntoOnce06() {
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo06');
  }
  goPuntoOnce07() {
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fo07');
  }
  goPuntoOnce20(){
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fs20')
  }
  goPuntoOnce21(){
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fs21')
  }
  goPuntoOnce22(){
    console.log('Hola mundo');
    
     this.navCtrl.navigateForward('/fs22')
  }
  goPuntoOnceIm01(){
    console.log('Hola mundo');
    this.navCtrl.navigateForward('/pdf-im01')
  }
  goPuntoOnceIm02(){
    console.log('Hola mundo');
    this.navCtrl.navigateForward('/pdf-im02')
  }
  goPuntoOnceIm03(){
    console.log('Hola mundo');
    this.navCtrl.navigateForward('/pdf-im03')
  }
  goPuntoOnceIm04(){
    console.log('Hola mundo');
    this.navCtrl.navigateForward('/pdf-im04')
  }
  goPuntoOnceIm05(){
    console.log('Hola mundo');
    this.navCtrl.navigateForward('/pdf-im05')
  }
  goPuntoOnceIm11(){
    console.log('Hola mundo');
    this.navCtrl.navigateForward('/pdf-im11')
  }
}
