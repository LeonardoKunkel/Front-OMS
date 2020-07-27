import { Component, OnInit } from '@angular/core';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';

@Component({
  selector: 'app-punto-dos-listado',
  templateUrl: './punto-dos-listado.page.html',
  styleUrls: ['./punto-dos-listado.page.scss'],
})
export class PuntoDosListadoPage implements OnInit {

  datosEstacion:any={
    calleNumero: '',
    ciudad: '',
    colonia: '',
    correoElectronico: '',
    cp: '',
    estado: '',
    gerenteEstacion: '',
    maximaAutoridad: '',
    nombreEstacionServicio: '',
    representanteTecnico: '',
    telefono: ''
  }

  iconoEstacion : null;
  marcaAguaEstacion: null;

  constructor(
    private icono : IconoEstacionService,
    private marcaAgua : MarcaAguaServiceService,
    private estacionDatos : EstacionServicioDatosService
  ) {
    this.getIcono();
    this.getMarcaAgua();
    this.getEstacion();
   }

  ngOnInit() {
  }

  getIcono(){
    this.icono.getPolitica().subscribe((data:any) =>{
      //console.log(data.findPolitica[data.findPolitica.length -1].imagen);
      this.iconoEstacion = data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }

  getMarcaAgua(){
    this.marcaAgua.getMarcaAgua().subscribe((data:any) =>{
      //console.log(data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
  }

  getEstacion(){
    this.estacionDatos.getEstacion().subscribe((data:any) =>{
      //console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length -1]
    })
    
  }

  pdf(){
    
  }
  }

