import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-fso02',
  templateUrl: './fso02.page.html',
  styleUrls: ['./fso02.page.scss'],
})
export class Fso02Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  
  goPuntoOnce(){
    console.log('esta vivo');
    this.navCtrl.navigateForward('/punto-once')
  }

}
