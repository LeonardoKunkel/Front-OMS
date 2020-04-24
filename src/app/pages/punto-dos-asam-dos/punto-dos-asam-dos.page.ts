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
    VT19: '',
    VT20: '',
    VT21: '',
    VT22: '',
    VT23: '',
    VT24: '',
    VT25: '',
    VT26: '',
  };

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  
  enviarForm(formulario) {
    console.log(this.datos);
    let valortotal19 = this.datos.F19 + this.datos.N19 + this.datos.M19;
    this.datos.VT19 = valortotal19;
    let valortotal20 = this.datos.F20 + this.datos.N20 + this.datos.M20;
    this.datos.VT20 = valortotal20;
    let valortotal21 = this.datos.F21 + this.datos.N21 + this.datos.M21;
    this.datos.VT21 = valortotal21;
    let valortotal22 = this.datos.F22 + this.datos.N22 + this.datos.M22;
    this.datos.VT22 = valortotal22;
    let valortotal23 = this.datos.F23 + this.datos.N23 + this.datos.M23;
    this.datos.VT23 = valortotal23;
    let valortotal24 = this.datos.F24 + this.datos.N24 + this.datos.M24;
    this.datos.VT24 = valortotal24;
    let valortotal25 = this.datos.F25 + this.datos.N25 + this.datos.M25;
    this.datos.VT25 = valortotal25;
    let valortotal26 = this.datos.F26 + this.datos.N26 + this.datos.M26;
    this.datos.VT26 = valortotal26;
  }

}
