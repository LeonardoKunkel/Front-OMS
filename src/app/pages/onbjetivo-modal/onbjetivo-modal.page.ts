import { Component, OnInit } from '@angular/core';
import { PopoverController  } from '@ionic/angular';

@Component({
  selector: 'app-onbjetivo-modal',
  templateUrl: './onbjetivo-modal.page.html',
  styleUrls: ['./onbjetivo-modal.page.scss'],
})
export class OnbjetivoModalPage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
  }

  closePopover(){
    this.popoverCtrl.dismiss();
  }

}
