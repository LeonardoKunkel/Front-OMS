import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-asam-dos',
  templateUrl: './punto-dos-asam-dos.page.html',
  styleUrls: ['./punto-dos-asam-dos.page.scss'],
})
export class PuntoDosAsamDosPage implements OnInit {

  datos: any = {
    F19: '',
    F20: '',
    F21: '',
    F22: '',
    F23: '',
    F24: '',
    F25: '',
    F26: '',
    N19: '',
    N20: '',
    N21: '',
    N22: '',
    N23: '',
    N24: '',
    N25: '',
    N26: '',
    M19: '',
    M20: '',
    M21: '',
    M22: '',
    M23: '',
    M24: '',
    M25: '',
    M26: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
  }

}
