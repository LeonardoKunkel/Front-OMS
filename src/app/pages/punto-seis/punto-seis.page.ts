import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-punto-seis',
  templateUrl: './punto-seis.page.html',
  styleUrls: ['./punto-seis.page.scss'],
})
export class PuntoSeisPage implements OnInit {

  @ViewChild('slider') slider: IonSlides

  constructor() { }

  ngOnInit() {
  }

  enviarPerfil(refForm) {
    console.log(refForm);
    
  }

  goBack() {}

  goNext() {}

  enviarCapacitacion(formula) {}

  enviarDatos(formulario) {}

  enviar(form) {}

}
