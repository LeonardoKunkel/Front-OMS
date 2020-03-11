import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dos-asam-seis',
  templateUrl: './punto-dos-asam-seis.page.html',
  styleUrls: ['./punto-dos-asam-seis.page.scss'],
})
export class PuntoDosAsamSeisPage implements OnInit {

  datos: any = {
    F38: '',
    F39: '',
    N38: '',
    N39: '',
    M38: '',
    M39: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
  }

}
