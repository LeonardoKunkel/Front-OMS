import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-punto-trece-programa',
  templateUrl: './punto-trece-programa.page.html',
  styleUrls: ['./punto-trece-programa.page.scss'],
})
export class PuntoTreceProgramaPage implements OnInit {

  framework1 = '';
  framework2 = '';

  constructor(private pickerCtrl: PickerController) { }

  async mostrarPicker1() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'framework1',
          options: [
            { text: 'Enero', value: 'A'},
            { text: 'Febrero', value: 'B'},
            { text: 'Marzo', value: 'C'},
            { text: 'Abril', value: 'D'},
            { text: 'Mayo', value: 'E'},
            { text: 'Junio', value: 'F'},
            { text: 'Julio', value: 'G'},
            { text: 'Agosto', value: 'H'},
            { text: 'Septiembre', value: 'I'},
            { text: 'Octubre', value: 'J'},
            { text: 'Noviembre', value: 'K'},
            { text: 'Diciembre', value: 'L'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data => {
      let col = await picker.getColumn('framework1');
      console.log('col: ', col);
      this.framework1 = col.options[col.selectedIndex].text;
    });
  }

  async mostrarPicker2() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'framework2',
          options: [
            { text: 'Enero', value: 'A'},
            { text: 'Febrero', value: 'B'},
            { text: 'Marzo', value: 'C'},
            { text: 'Abril', value: 'D'},
            { text: 'Mayo', value: 'E'},
            { text: 'Junio', value: 'F'},
            { text: 'Julio', value: 'G'},
            { text: 'Agosto', value: 'H'},
            { text: 'Septiembre', value: 'I'},
            { text: 'Octubre', value: 'J'},
            { text: 'Noviembre', value: 'K'},
            { text: 'Diciembre', value: 'L'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data => {
      let col = await picker.getColumn('framework2');
      console.log('col: ', col);
      this.framework2 = col.options[col.selectedIndex].text;
    });
  }

  ngOnInit() {
  }

}
