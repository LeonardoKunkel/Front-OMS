import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pdf-im04',
  templateUrl: './pdf-im04.page.html',
  styleUrls: ['./pdf-im04.page.scss'],
})
export class PdfIM04Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }

}
