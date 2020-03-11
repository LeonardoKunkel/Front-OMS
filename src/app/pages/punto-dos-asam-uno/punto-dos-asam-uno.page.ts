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
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  
  enviarForm(formulario) {
    console.log(this.datos);
  }

}
