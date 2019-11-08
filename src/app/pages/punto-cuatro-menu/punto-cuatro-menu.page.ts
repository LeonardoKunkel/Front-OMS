import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-punto-cuatro-menu',
  templateUrl: './punto-cuatro-menu.page.html',
  styleUrls: ['./punto-cuatro-menu.page.scss'],
})
export class PuntoCuatroMenuPage implements OnInit {

  constructor(
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }
  goPuntoCuatro(){
    this.navCtrl.navigateForward('/punto-cuatro')
  }
  goEvidencia(){
    this.navCtrl.navigateForward('/punto-cuatro-evidencia')
  }
  goProcedimiento(){
    this.navCtrl.navigateForward('/punto-cuatro-procedimiento')
  }
}
