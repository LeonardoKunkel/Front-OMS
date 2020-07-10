import { Component, OnInit } from '@angular/core';
import { ObjetivosMetasService } from '../../services/Elemento 4/objetivos-metas.service';

@Component({
  selector: 'app-punto-catorce-resultado',
  templateUrl: './punto-catorce-resultado.page.html',
  styleUrls: ['./punto-catorce-resultado.page.scss'],
})
export class PuntoCatorceResultadoPage implements OnInit {

  datosObjetivos:any={
    cumplimientoProgramaMantenimiento: false,
    incrementarCapacitaciones: false,
    incrementarVentaAnualmente: false,
    reduccionConsumoAgua: false,
    reduccionConsumoEnergia: false,
    reduccionGeneracionResiduos: false,
  }
  printDatos:any={
    dato1: '',
    dato2: '',
    dato3: ''
  }
  constructor( private objetivosService: ObjetivosMetasService) {
    this.getObjetivos();
   }

  ngOnInit() {
  }
  getObjetivos(){
    this.objetivosService.getObjetivo().subscribe((data:any)=>{
      this.datosObjetivos = data.findMetas[data.findMetas.length -1];
      //console.log(this.datosObjetivos);
      this.checkOject();
    })
  }

  checkOject(){
    let cuatro = this.datosObjetivos.cumplimientoProgramaMantenimiento;
    let cinco = this.datosObjetivos.incrementarCapacitaciones;
    let seis = this.datosObjetivos.incrementarVentaAnualmente;
    let dos = this.datosObjetivos.reduccionConsumoAgua;
    let tres = this.datosObjetivos.reduccionConsumoEnergia;
    let uno = this.datosObjetivos.reduccionGeneracionResiduos;
  
    if (uno === true && dos === true && tres === true) {
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.dato3 = 'Reducción en el consumo de energia';
     // alert('123')
    }else if(uno === true && dos === true && cuatro === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.dato3 = 'Cumplimiento al programa de mantenimiento';
     // alert('124')
    }else if(uno === true && dos === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
     // alert('125')
     }else if(uno === true && dos === true && seis === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de agua';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
       //alert('126')
     }else if(uno === true && tres === true && cuatro === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.dato3 = 'Cumplimiento al programa de mantenimiento';
       //alert('134')
     }else if(uno === true && tres === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
       //alert('135')
     }else if(uno === true && tres === true && seis === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
       //alert('136')
     }else if(uno === true && cuatro === true && cinco=== true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
       //alert('145')
     }else if(uno === true && cuatro=== true && seis === true){
      this.printDatos.dato1 = 'Reducción en generacion de residuos peligrosos';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      // alert('146')
     }else if(dos === true && tres === true && cuatro === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.dato3 = 'Cumplimiento al programa de mantenimiento';
      // alert('234')
     }else if(dos === true && tres === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      // alert('235')
     }else if(dos === true && tres === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.dato2 = 'Reducción en el consumo de energia';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      // alert('236')
     }else if(dos === true && cuatro === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      //alert('245')
     }else if(dos === true && cuatro === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      //alert('246')
     }else if(dos === true && cinco === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de agua';
      this.printDatos.dato2 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      //alert('256')
     }else if(tres === true && cuatro === true && cinco === true){
      this.printDatos.dato1 = 'Reducción en el consumo de energia';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato3 = 'Incrementar capacitaciones a los trabajadores';
      //alert('345')
     }else if(tres=== true && cuatro === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de energia';
      this.printDatos.dato2 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      // alert('346')
     }else if(tres === true && cinco === true && seis === true){
      this.printDatos.dato1 = 'Reducción en el consumo de energia';
      this.printDatos.dato2 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      // alert('356')
     }else if(cuatro === true && cinco === true && seis === true){
      this.printDatos.dato1 = 'Cumplimiento al programa de mantenimiento';
      this.printDatos.dato2 = 'Incrementar capacitaciones a los trabajadores';
      this.printDatos.dato3 = 'Incrementar venta 5% anualmente';
      // alert('456')
     }
  }

  read(){
    console.log(this.printDatos);
    
  }

}
