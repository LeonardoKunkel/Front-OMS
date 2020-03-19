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
    VT30: '',
    VT31: '',
    VT32: '',
    VT33: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  enviarForm(formulario) {
    console.log(this.datos);
    let valortotal30 = this.datos.F30 + this.datos.N30 + this.datos.M30;
    this.datos.VT30 = valortotal30;
    let valortotal31 = this.datos.F31 + this.datos.N31 + this.datos.M31;
    this.datos.VT31 = valortotal31;
    let valortotal32 = this.datos.F32 + this.datos.N32 + this.datos.M32;
    this.datos.VT32 = valortotal32;
    let valortotal33 = this.datos.F33 + this.datos.N33 + this.datos.M33;
    this.datos.VT33 = valortotal33;
  }

}
