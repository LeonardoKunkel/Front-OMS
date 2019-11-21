import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover1',
  templateUrl: './popover1.page.html',
  styleUrls: ['./popover1.page.scss'],
})
export class Popover1Page implements OnInit {

  items = Array(6); 

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
    
  }

  onClick( valor: number ){

    console.log('item:', valor);

    this.popoverCtrl.dismiss({
      item: valor 
    });

  }

}