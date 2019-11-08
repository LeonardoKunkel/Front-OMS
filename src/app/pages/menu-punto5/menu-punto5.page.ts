import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-punto5',
  templateUrl: './menu-punto5.page.html',
  styleUrls: ['./menu-punto5.page.scss'],
})
export class MenuPunto5Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoCinco() {
    this.navCtrl.navigateForward('/punto-cinco')
  }
  goPuntoCincoProcedimiento() {
    this.navCtrl.navigateForward('/punto-cinco-procedimiento')
  }
  goPuntoCincoEvidencia(){
    this.navCtrl.navigateForward('/punto-cinco-evidencia')
  }
}
