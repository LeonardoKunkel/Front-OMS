import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-punto-ocho',
  templateUrl: './punto-ocho.page.html',
  styleUrls: ['./punto-ocho.page.scss'],
})
export class PuntoOchoPage implements OnInit {
  datos:any={

  }
  @ViewChild('slider') slider: IonSlides
  @ViewChild(IonInfiniteScroll) InfiniteScroll:IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  enviarForm(formulario){
    console.log(this.datos);
    
  }
  
}
