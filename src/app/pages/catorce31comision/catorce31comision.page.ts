import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-catorce31comision',
  templateUrl: './catorce31comision.page.html',
  styleUrls: ['./catorce31comision.page.scss'],
})
export class Catorce31comisionPage implements OnInit {

  datos:any ={
    fecha1:'',
    texto1:'',
    check1:'',
    check2:'',
    check3:'',
    check4:'',
  }
  
  constructor( private pdfMaker: PdfMakerService ) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

}
