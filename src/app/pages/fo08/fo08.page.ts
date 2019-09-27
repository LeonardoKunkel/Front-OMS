import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-fo08',
  templateUrl: './fo08.page.html',
  styleUrls: ['./fo08.page.scss'],
})
export class Fo08Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }

}
