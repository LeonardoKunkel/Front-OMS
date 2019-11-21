import { Component, OnInit, } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-punto-cuatro',
  templateUrl: './punto-cuatro.page.html',
  styleUrls: ['./punto-cuatro.page.scss'],
})
export class PuntoCuatroPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goOpcion1() {
    this.navCtrl.navigateForward('/cuatro1')
    console.log('entraste')
  }

  goOpcion2() {
    this.navCtrl.navigateForward('/cuatro2')
    console.log('entraste')
  }
  goOpcion3() {
    this.navCtrl.navigateForward('/cuatro3')
    console.log('entraste')
  }
}