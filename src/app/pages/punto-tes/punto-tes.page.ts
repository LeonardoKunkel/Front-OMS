import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-tes',
  templateUrl: './punto-tes.page.html',
  styleUrls: ['./punto-tes.page.scss'],
})
export class PuntoTesPage implements OnInit {
  imagen:[
    {
      img:'./minion.jpg'
    }
  ]

  @ViewChild('slider') slider: IonSlides

  constructor(private pdfMaker: PdfMakerService,private navCtrl: NavController) { }

  ngOnInit() {
  }

  segmentChanged(event) {
    const value = event.detail.value;
    
    if(value === "form") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(1);
      this.slider.lockSwipes(true);
    } else if(value === "proced"){
      this.slider.lockSwipes(false);
      this.slider.slideTo(0);
      this.slider.lockSwipes(true);
    }
  }

  goProcedimiento() {
    this.navCtrl.navigateForward('/punto-tres-procedimiento');
  }

  goFormulario() {
    this.navCtrl.navigateForward('/punto-tres-lista');
  }
  goEvidencia() {
    this.navCtrl.navigateForward('/punto-tres-evidencia');
  }
}
