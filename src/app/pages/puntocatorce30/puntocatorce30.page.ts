import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-puntocatorce30',
  templateUrl: './puntocatorce30.page.html',
  styleUrls: ['./puntocatorce30.page.scss'],
})
export class Puntocatorce30Page implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
  }

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
  }

}
