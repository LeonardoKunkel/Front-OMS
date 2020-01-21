import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-catorce31asea',
  templateUrl: './catorce31asea.page.html',
  styleUrls: ['./catorce31asea.page.scss'],
})
export class Catorce31aseaPage implements OnInit {

  datos:any ={
    fecha1:'',
    fecha2:'',
    fecha3:'',
    fecha4:'',
    fecha5:'',
    fecha6:'',
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
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

  }

  constructor( private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }
  
}