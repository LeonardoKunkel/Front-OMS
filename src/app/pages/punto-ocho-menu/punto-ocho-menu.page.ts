import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-punto-ocho-menu',
  templateUrl: './punto-ocho-menu.page.html',
  styleUrls: ['./punto-ocho-menu.page.scss'],
})
export class PuntoOchoMenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goListaMaestra() {
    this.navCtrl.navigateForward('/punto-ocho');
  }

  goSolicitudCambios() {
    this.navCtrl.navigateForward('/punto-ocho-solicitud-cambios');
    console.log('entraste a la página 9')
  }

  goDistribucionDocumentos(){
    this.navCtrl.navigateForward('/punto-diez');
    console.log('entraste a la página X')
  }

  goListaDistribucion(){
    this.navCtrl.navigateForward('/punto-ocho-lista-distribucion');
    console.log('entraste a la página X')
  }
  
  goprocedimiento() {
    this.navCtrl.navigateForward('/punto-ocho-evidencias');
  }

  goEvidencia() {
    this.navCtrl.navigateForward('/punto-ocho-evidencia');
  }

 

}
