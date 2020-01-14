import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-catorce31semarnat',
  templateUrl: './catorce31semarnat.page.html',
  styleUrls: ['./catorce31semarnat.page.scss'],
})
export class Catorce31semarnatPage implements OnInit {

  datos:any = {
    fecha1:'',
    fecha2:'',
    fecha3:'',
    fecha4:'',
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
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
  }

  constructor( private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

}
