import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-punto-diezfo09',
  templateUrl: './punto-diezfo09.page.html',
  styleUrls: ['./punto-diezfo09.page.scss'],
})
export class PuntoDiezfo09Page implements OnInit {

  datos:any = {
    numero:'',
    fecha1:'',
    fecha2:'',
    escribeequipo:'',
    escribetrabajo:'',
    check1:'',
    check2:'',
    check3:'',
    check4:'',
    check5:'',
    check6:'',
    check7:'',
    check8:'',
    check9:'',
    check10:'',
    check12:'',
    check13:'',
    check14:'',
    check15:'',
    check16:'',
    check17:'',
    check18:'',
    check19:'',
    check20:'',
    check21:'',
    check22:'',
    check23:'',
    check24:'',
    check25:'',
    check26:'',
    check27:'',
    check28:'',
    check29:'',
    check30:'',
    check31:'',
    check32:'',
    check33:'',
    check34:'',
    check35:'',
    check36:'',
    check37:'',
    check38:'',
    check39:'',
    check40:'',
    check41:'',
    check42:'',
    check43:'',
    check44:'',
    check45:'',
    check46:'',
    check47:'',
    check48:'',
    check49:'',
    check50:'',
    check51:'',
    check52:'',
    check53:'',
    check54:'',
    check55:'',
    check56:'',
    check57:'',
    check58:'',
    check59:'',
    escribemedidas:'',
    check60:'',
    check61:'',
    check62:'',
    check63:'',
    check64:'',
    check65:'',
    check66:'',
    check67:'',
    check68:'',
    check69:'',
    check70:'',
    check71:'',
    check72:'',
    check73:'',
    check74:'',
    check75:'',
  }

  framework = '';

  constructor(private pdfMaker: PdfMakerService, private pickerCtrl: PickerController) { }

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
            { text: 'Acepatada', value: 'A'},
            { text: 'Rechazada', value: 'B'},
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data => {
      let col = await picker.getColumn('framework');
      this.framework = col.options[col.selectedIndex].text;
    });
  }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
  }

}
