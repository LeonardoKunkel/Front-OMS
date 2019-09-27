import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';


@Component({
  selector: 'app-pdf-im01',
  templateUrl: './pdf-im01.page.html',
  styleUrls: ['./pdf-im01.page.scss'],
})
export class PdfIM01Page implements OnInit {

  constructor(public navCtrl:NavController, private document:DocumentViewer) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }
}
