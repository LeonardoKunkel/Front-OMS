import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pdf-im03',
  templateUrl: './pdf-im03.page.html',
  styleUrls: ['./pdf-im03.page.scss'],
})
export class PdfIM03Page implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }
}
