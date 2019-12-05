import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-doce-anexo',
  templateUrl: './punto-doce-anexo.page.html',
  styleUrls: ['./punto-doce-anexo.page.scss'],
})
export class PuntoDoceAnexoPage implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
  }

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm(formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
  }

}
