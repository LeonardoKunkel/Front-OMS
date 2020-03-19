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
    VT34: '',
    VT35: '',
    VT36: '',
    VT37: '',
  };

  constructor(private pdfMake: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
    let valortotal34 = this.datos.F34 + this.datos.N34 + this.datos.M34;
    this.datos.VT34 = valortotal34;
    let valortotal35 = this.datos.F35 + this.datos.N35 + this.datos.M35;
    this.datos.VT35 = valortotal35;
    let valortotal36 = this.datos.F36 + this.datos.N36 + this.datos.M36;
    this.datos.VT36 = valortotal36;
    let valortotal37 = this.datos.F37 + this.datos.N37 + this.datos.M37;
    this.datos.VT37 = valortotal37;
  }

}
