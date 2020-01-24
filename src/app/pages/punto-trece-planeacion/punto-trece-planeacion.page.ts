import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-trece-planeacion',
  templateUrl: './punto-trece-planeacion.page.html',
  styleUrls: ['./punto-trece-planeacion.page.scss'],
})
export class PuntoTrecePlaneacionPage implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
    texto7:'',
    texto8:'',
    texto9:'',
    texto10:'',
    texto11:'',
    texto12:'',
    texto13:'',
    texto14:'',
    texto15:'',
    texto16:'',
    texto17:'',
    texto18:'',
    texto19:'',
    texto20:'',
    fecha1:'',
  }

  constructor() { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

}
