import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-asam-tres',
  templateUrl: './punto-dos-asam-tres.page.html',
  styleUrls: ['./punto-dos-asam-tres.page.scss'],
})
export class PuntoDosAsamTresPage implements OnInit {

  datos: any = {
    F27: '',
    F28: '',
    F29: '',
    N27: '',
    N28: '',
    N29: '',
    M27: '',
    M28: '',
    M29: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
  }

}
