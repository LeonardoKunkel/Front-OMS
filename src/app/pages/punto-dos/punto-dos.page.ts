import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPoliticaPage } from '../edit-politica/edit-politica.page';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-punto-dos',
  templateUrl: './punto-dos.page.html',
  styleUrls: ['./punto-dos.page.scss'],
})
export class PuntoDosPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private pdfMakerService: PdfMakerService
  ) { }

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
}
