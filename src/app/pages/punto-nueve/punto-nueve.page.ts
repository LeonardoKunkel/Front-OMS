import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-nueve',
  templateUrl: './punto-nueve.page.html',
  styleUrls: ['./punto-nueve.page.scss'],
})
export class PuntoNuevePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goNueveUno(){
    this.navCtrl.navigateForward('/nueve-procedimiento')
  }

  goNueveDos(){
    this.navCtrl.navigateForward('/nueve-listado')
  }

  goNueveTres(){
    this.navCtrl.navigateForward('/nueve-evidencia')
  }

}
