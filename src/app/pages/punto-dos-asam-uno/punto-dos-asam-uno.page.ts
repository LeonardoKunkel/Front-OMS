import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-asam-uno',
  templateUrl: './punto-dos-asam-uno.page.html',
  styleUrls: ['./punto-dos-asam-uno.page.scss'],
})
export class PuntoDosAsamUnoPage implements OnInit {

  datos: any = {
    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',
    F10: '',
    F11: '',
    F12: '',
    F13: '',
    F14: '',
    F15: '',
    F16: '',
    F17: '',
    F18: '',
    N1: '',
    N2: '',
    N3: '',
    N4: '',
    N5: '',
    N6: '',
    N7: '',
    N8: '',
    N9: '',
    N10: '',
    N11: '',
    N12: '',
    N13: '',
    N14: '',
    N15: '',
    N16: '',
    N17: '',
    N18: '',
    M1: '',
    M2: '',
    M3: '',
    M4: '',
    M5: '',
    M6: '',
    M7: '',
    M8: '',
    M9: '',
    M10: '',
    M11: '',
    M12: '',
    M13: '',
    M14: '',
    M15: '',
    M16: '',
    M17: '',
    M18: '',
    VT1: '',
    VT2: '',
    VT3: '',
    VT4: '',
    VT5: '',
    VT6: '',
    VT7: '',
    VT8: '',
    VT9: '',
    VT10: '',
    VT11: '',
    VT12: '',
    VT13: '',
    VT14: '',
    VT15: '',
    VT16: '',
    VT17: '',
    VT18: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  enviarForm(formulario) {
    console.log(this.datos);
    let valortotal1 = this.datos.F1 + this.datos.N1 + this.datos.M1;
    this.datos.VT1 = valortotal1;
    let valortotal2 = this.datos.F2 + this.datos.N2 + this.datos.M2;
    this.datos.VT2 = valortotal2;
    let valortotal3 = this.datos.F3 + this.datos.N3 + this.datos.M3;
    this.datos.VT3 = valortotal3;
    let valortotal4 = this.datos.F4 + this.datos.N4 + this.datos.M4;
    this.datos.VT4 = valortotal4;
    let valortotal5 = this.datos.F5 + this.datos.N5 + this.datos.M5;
    this.datos.VT5 = valortotal5;
    let valortotal6 = this.datos.F6 + this.datos.N6 + this.datos.M6;
    this.datos.VT6 = valortotal6;
    let valortotal7 = this.datos.F7 + this.datos.N7 + this.datos.M7;
    this.datos.VT7 = valortotal7;
    let valortotal8 = this.datos.F8 + this.datos.N8 + this.datos.M8;
    this.datos.VT8 = valortotal8;
    let valortotal9 = this.datos.F9 + this.datos.N9 + this.datos.M9;
    this.datos.VT9 = valortotal9;
    let valortotal10 = this.datos.F10 + this.datos.N10 + this.datos.M10;
    this.datos.VT10 = valortotal10;
    let valortotal11 = this.datos.F11 + this.datos.N11 + this.datos.M11;
    this.datos.VT11 = valortotal11;
    let valortotal12 = this.datos.F12 + this.datos.N12 + this.datos.M12;
    this.datos.VT12 = valortotal12;
    let valortotal13 = this.datos.F13 + this.datos.N13 + this.datos.M13;
    this.datos.VT13 = valortotal13;
    let valortotal14 = this.datos.F14 + this.datos.N14 + this.datos.M14;
    this.datos.VT14 = valortotal14;
    let valortotal15 = this.datos.F15 + this.datos.N15 + this.datos.M15;
    this.datos.VT15 = valortotal15;
    let valortotal16 = this.datos.F16 + this.datos.N16 + this.datos.M16;
    this.datos.VT16 = valortotal16;
    let valortotal17 = this.datos.F17 + this.datos.N17 + this.datos.M17;
    this.datos.VT17 = valortotal17;
    let valortotal18 = this.datos.F18 + this.datos.N18 + this.datos.M18;
    this.datos.VT18 = valortotal18;
  }

}
