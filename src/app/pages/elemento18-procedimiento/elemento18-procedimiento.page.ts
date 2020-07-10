import { Component, OnInit } from '@angular/core';
import { Elemento18ServiceService } from '../../services/Elemento 18/elemento18-service.service';

@Component({
  selector: 'app-elemento18-procedimiento',
  templateUrl: './elemento18-procedimiento.page.html',
  styleUrls: ['./elemento18-procedimiento.page.scss'],
})
export class Elemento18ProcedimientoPage implements OnInit {
 
  constructor( private superDieciocho: Elemento18ServiceService ) { }

  ngOnInit() {
  }

}
