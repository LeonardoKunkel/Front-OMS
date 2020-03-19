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
    VT38: '',
    VT39: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm(formulario) {
    console.log(this.datos);
    let valortotal38 = this.datos.F38 + this.datos.N38 + this.datos.M38;
    this.datos.VT38 = valortotal38;
    let valortotal39 = this.datos.F39 + this.datos.N39 + this.datos.M39;
    this.datos.VT39 = valortotal39;
  }

}
