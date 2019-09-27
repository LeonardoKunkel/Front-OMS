import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pdf-im05',
  templateUrl: './pdf-im05.page.html',
  styleUrls: ['./pdf-im05.page.scss'],
})
export class PdfIM05Page implements OnInit {
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }


}
