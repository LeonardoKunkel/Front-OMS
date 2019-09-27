import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-fo05',
  templateUrl: './fo05.page.html',
  styleUrls: ['./fo05.page.scss'],
})
export class Fo05Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }

}
