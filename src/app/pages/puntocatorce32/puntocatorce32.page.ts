import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';


@Component({
  selector: 'app-puntocatorce32',
  templateUrl: './puntocatorce32.page.html',
  styleUrls: ['./puntocatorce32.page.scss'],
})
export class Puntocatorce32Page implements OnInit {

  datos:any = {
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
    texto12:'',
    texto13:'',
    texto14:'',
    texto15:'',
    texto16:'',
    texto17:'',
    texto18:'',
    texto19:'',
    texto20:'',
    texto21:'',
    texto22:'',
    texto23:'',
    texto24:'',
    texto25:'',
    texto26:'',
    texto27:'',
    texto28:'',
    texto29:'',
    texto30:'',
    texto31:'',
    texto32:'',
    texto33:'',
    texto34:'',
    texto35:'',
    texto36:'',
    texto37:'',
    texto38:'',
    texto39:'',
    texto40:'',
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
    fecha12:'',
    fecha13:'',
    fecha14:'',
    fecha15:'',
    fecha16:'',
    fecha17:'',
    fecha18:'',
    fecha19:'',
    fecha20:'',
  }

  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
  }

}
