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
    VT27: '',
    VT28: '',
    VT29: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
    let valortotal27 = this.datos.F27 + this.datos.N27 + this.datos.M27;
    this.datos.VT27 = valortotal27;
    let valortotal28 = this.datos.F28 + this.datos.N28 + this.datos.M28;
    this.datos.VT28 = valortotal28;
    let valortotal29 = this.datos.F29 + this.datos.N29 + this.datos.M29;
    this.datos.VT29 = valortotal29;
  }

}
