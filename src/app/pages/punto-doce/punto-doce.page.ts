import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-punto-doce',
  templateUrl: './punto-doce.page.html',
  styleUrls: ['./punto-doce.page.scss'],
})
export class PuntoDocePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goPuntoDoceCartaRes(){
    console.log('CartaResponsiva');
    this.navCtrl.navigateForward('/p12-carta-responsiva');
  }
  goPuntoDoceSeguridadContratista(){
    console.log('Seguridad de contratista');
    this.navCtrl.navigateForward('/p12-seguridad-contratista');
  }
  goPuntoDoceAnexoSeguridad(){
    console.log('Anexo Seguridad');
    this.navCtrl.navigateForward('/p12-anexo-seguridad')
  }
}
