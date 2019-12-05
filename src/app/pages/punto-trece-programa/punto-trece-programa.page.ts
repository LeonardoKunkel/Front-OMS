import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-punto-trece-programa',
  templateUrl: './punto-trece-programa.page.html',
  styleUrls: ['./punto-trece-programa.page.scss'],
})
export class PuntoTreceProgramaPage implements OnInit {

  framework = '';

  constructor(private pickerCtrl: PickerController) { }

  async mostrarPicker() {
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
          name: 'framework',
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
      let col = await picker.getColumn('framework');
      console.log('col: ', col);
      this.framework = col.options[col.selectedIndex].text;
    });
  }

  ngOnInit() {
  }

}
