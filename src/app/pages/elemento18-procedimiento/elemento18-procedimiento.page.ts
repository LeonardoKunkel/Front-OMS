import { Component, OnInit } from '@angular/core';
import { Elemento18ServiceService } from '../../services/Elemento 18/elemento18-service.service';

@Component({
  selector: 'app-elemento18-procedimiento',
  templateUrl: './elemento18-procedimiento.page.html',
  styleUrls: ['./elemento18-procedimiento.page.scss'],
})
export class Elemento18ProcedimientoPage implements OnInit {

  datos: any = {
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    mail: '',
  };

  constructor( private superDieciocho: Elemento18ServiceService ) { }

  ngOnInit() {
  }
  enviar() {
    console.log(this.datos);
    this.superDieciocho.crearDieciocho(this.datos).subscribe(data => {
      console.log(data);
    });
  }

}
