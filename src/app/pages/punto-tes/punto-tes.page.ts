import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-punto-tes',
  templateUrl: './punto-tes.page.html',
  styleUrls: ['./punto-tes.page.scss'],
})
export class PuntoTesPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor() { }

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

  goLicemciaAmbiental() {
    window.open('https://www.gob.mx/tramites/ficha/licencia-ambiental-unica-del-sector-hidrocarburos/ASEA6207')
  }

  downloadListReqLeg() {
    
  }

}
