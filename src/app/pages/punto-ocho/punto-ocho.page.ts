import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-punto-ocho',
  templateUrl: './punto-ocho.page.html',
  styleUrls: ['./punto-ocho.page.scss'],
})
export class PuntoOchoPage implements OnInit {

  @ViewChild('slider') slider: IonSlides
  @ViewChild(IonInfiniteScroll) InfiniteScroll:IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  segmentChanged(event) {
    const value = event.detail.value;
    if (value === "procedimientoSistema") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(1);
      this.slider.lockSwipes(true);
    }
    else if (value === "procedimiento") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(0);
      this.slider.lockSwipes(true);
    }
    if (value == "lista") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(2);
      this.slider.lockSwipes(true);
    }
    if (value == "cambios") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(3);
      this.slider.lockSwipes(true);
    }
    if (value == "listaDistribucion") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(4);
      this.slider.lockSwipes(true);
    }
  }
  loadData(event){
    console.log('Cargando siguientes...');
  
  }
}
