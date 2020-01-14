import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-catorce31secretaria',
  templateUrl: './catorce31secretaria.page.html',
  styleUrls: ['./catorce31secretaria.page.scss'],
})
export class Catorce31secretariaPage implements OnInit {

  datos:any = {
    fecha1:'',
    fecha2:'',
    fecha3:'',
    fecha4:'',
    fecha5:'',
    fecha6:'',
    fecha7:'',
    fecha8:'',
    fecha9:'',
    fecha10:'',
    fecha11:'',
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
    texto7:'',
    texto8:'',
    texto9:'',
    texto10:'',
    texto11:'',
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
    check11:'',
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
  }

  constructor( private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

}
