import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-seis-deteccion-necesidades',
  templateUrl: './punto-seis-deteccion-necesidades.page.html',
  styleUrls: ['./punto-seis-deteccion-necesidades.page.scss'],
})
export class PuntoSeisDeteccionNecesidadesPage implements OnInit {
datos:any={
  R1:'',
  R2:'',
  R3:'',
  R4:'',
  R5:'',
  R6:'',
  R7:'',
  R8:'',
  R9:'',
  R10:'',
  R11:'',
}
  constructor() { }

  ngOnInit() {
  }

  enviarForm(formulario){
    console.log(this.datos);
    
  }

}
