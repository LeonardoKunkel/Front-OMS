import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController , IonCard } from '@ionic/angular';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';
import { PoliticaService } from 'src/app/services/Elemento1/politica.service';

@Component({
  selector: 'app-estacion-servicio-model',
  templateUrl: './estacion-servicio-model.page.html',
  styleUrls: ['./estacion-servicio-model.page.scss'],
})
export class EstacionServicioModelPage implements OnInit {

  @ViewChild('card') card: IonCard;

  constructor(
    private modalCtrl: ModalController,
    private estacionServicioService:EstacionServicioDatosService
    ) { }
  datos:any={
    nombreEstacionServicio:'',
    estado:'',
    ciudad:'',
    colonia:'',
    cp:'',
    calleNumero:'',
    correoElectronico:'',
    telefono:'',
    gerenteEstacion:'',
    representanteTecnico:'',
    maximaAutoridad:''
  }
  lista: string[] = [];
  

  guardarEnviar(){
    this.estacionServicioService.crearDatos(this.datos).subscribe(data => console.log(data));
  }

  consultarDatos(){
    this.estacionServicioService.getEstacion().subscribe((data:any) =>{
      
      return console.log(data);
      
    })
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed' : true
    });
  }

  enviarForm(formulario){
    console.log(this.datos);
    this.guardarEnviar();
  }

}
