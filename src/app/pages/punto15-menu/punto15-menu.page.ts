import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-punto15-menu',
  templateUrl: './punto15-menu.page.html',
  styleUrls: ['./punto15-menu.page.scss'],
})
export class Punto15MenuPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goEvidencia(){
    this.navCtrl.navigateForward('/punto15-evidencia')
  }
  goProcedimiento(){
    this.navCtrl.navigateForward('/punto15-procedimiento')
  }
  goAtencion(){
    this.navCtrl.navigateForward('/punto15-atencion-hallazgos')
  }
  goInforme(){
    this.navCtrl.navigateForward('/punto15-informe-auditorias')
  }
  goPlan(){
    this.navCtrl.navigateForward('/punto15-plan-auditorias')
  }
  
  goPrograma(){
    this.navCtrl.navigateForward('/punto15-programa-auditorias')
  }
}
