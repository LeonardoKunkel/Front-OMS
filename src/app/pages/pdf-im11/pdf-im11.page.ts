import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pdf-im11',
  templateUrl: './pdf-im11.page.html',
  styleUrls: ['./pdf-im11.page.scss'],
})
export class PdfIM11Page implements OnInit {
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }

}
