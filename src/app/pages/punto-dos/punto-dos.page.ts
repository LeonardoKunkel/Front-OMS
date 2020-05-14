import { PuntodosService } from './../../services/puntodos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-punto-dos',
  templateUrl: './punto-dos.page.html',
  styleUrls: ['./punto-dos.page.scss'],
})
export class PuntoDosPage implements OnInit {

  puntoDos: any[] = [];

  puntodos:any = {
    compresor: false,
    hidroneumatico: false,
    palantaEmergencia: false,
    pararayos: false,
    cisterna: false,
    bombaAgua: false,
    cambioAceite: false,
    bodegaLubricantes: false,
    residuosPeligrosos: false
  };

  @ViewChild('slider') slider: IonSlides

  constructor(private navCtrl: NavController) {

  }

  ngOnInit() {

  }

  goDosProcedimiento() {
    this.navCtrl.navigateForward('/punto-dos-procedimiento');
  }

  goDosRiesgos() {
    this.navCtrl.navigateForward('/punto-dos-riesgos');
  }

  goDosAspectos() {
    this.navCtrl.navigateForward('/punto-dos-aspectos');
  }

  goDosListado() {
    this.navCtrl.navigateForward('/punto-dos-listado');
  }

  goDosResultados() {
    this.navCtrl.navigateForward('/punto-dos-resultado');
  }

}
