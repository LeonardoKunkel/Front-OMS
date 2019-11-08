import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-seis-menu',
  templateUrl: './punto-seis-menu.page.html',
  styleUrls: ['./punto-seis-menu.page.scss'],
})
export class PuntoSeisMenuPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
goPuntoPerfilPuesto(){
  this.navCtrl.navigateForward('/punto-seis')
  
}
goPuntoDeteccionNecesidaes(){
  this.navCtrl.navigateForward('/punto-seis-deteccion-necesidades')
  
}
goPuntoProgramaCapacitacion(){
  this.navCtrl.navigateForward('/punto-seis-programa-capacitacion')
  
}
goPuntoSeguimientoPrograma(){
  this.navCtrl.navigateForward('/punto-seis-seguimiento-programa')
  
}
goPuntoProcedimiento(){
  this.navCtrl.navigateForward('/punto-seis-procedimiento')
  
}
goPuntoEvidencia(){
  this.navCtrl.navigateForward('/punto-seis-evidencia')
  
}
}
