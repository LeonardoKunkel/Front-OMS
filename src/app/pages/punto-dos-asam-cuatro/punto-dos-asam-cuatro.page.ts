import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-asam-cuatro',
  templateUrl: './punto-dos-asam-cuatro.page.html',
  styleUrls: ['./punto-dos-asam-cuatro.page.scss'],
})
export class PuntoDosAsamCuatroPage implements OnInit {

  datos: any = {
    F30: '',
    F31: '',
    F32: '',
    F33: '',
    N30: '',
    N31: '',
    N32: '',
    N33: '',
    M30: '',
    M31: '',
    M32: '',
    M33: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
  }

}
