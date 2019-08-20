import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pdf-visual',
  templateUrl: './pdf-visual.page.html',
  styleUrls: ['./pdf-visual.page.scss'],
})
export class PdfVisualPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  regresar(){
    this.navCtrl.navigateForward('/punto-seis')
  }

}
