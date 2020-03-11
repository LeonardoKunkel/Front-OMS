import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-asam-cinco',
  templateUrl: './punto-dos-asam-cinco.page.html',
  styleUrls: ['./punto-dos-asam-cinco.page.scss'],
})
export class PuntoDosAsamCincoPage implements OnInit {

  datos: any = {
    F34: '',
    F35: '',
    F36: '',
    F37: '',
    N34: '',
    N35: '',
    N36: '',
    N37: '',
    M34: '',
    M35: '',
    M36: '',
    M37: '',
  };

  constructor(private pdfMake: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
  }

}
