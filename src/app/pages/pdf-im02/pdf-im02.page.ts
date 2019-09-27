import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pdf-im02',
  templateUrl: './pdf-im02.page.html',
  styleUrls: ['./pdf-im02.page.scss'],
})
export class PdfIM02Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }

}
