import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-fo01-inventarios',
  templateUrl: './fo01-inventarios.page.html',
  styleUrls: ['./fo01-inventarios.page.scss'],
})
export class Fo01InventariosPage implements OnInit {

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }



}
