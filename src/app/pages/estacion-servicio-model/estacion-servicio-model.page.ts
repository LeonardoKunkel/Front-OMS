import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController , IonCard } from '@ionic/angular';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';
import { PoliticaService } from 'src/app/services/Elemento1/politica.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estacion-servicio-model',
  templateUrl: './estacion-servicio-model.page.html',
  styleUrls: ['./estacion-servicio-model.page.scss'],
})
export class EstacionServicioModelPage implements OnInit {

  @ViewChild('card') card: IonCard;

  constructor(
    private modalCtrl: ModalController,
    private estacionServicioService:EstacionServicioDatosService,
    private activateRoute: ActivatedRoute
    ) {
      const id = this.activateRoute.snapshot.paramMap.get("id");
      console.log(id,'id');
      
      this.consultarDatos();
     }
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

   lista:any=[]
   
  guardarEnviar(){
    this.estacionServicioService.crearDatos(this.datos).subscribe(data => console.log(data));
  }

  consultarDatos(){
    this.estacionServicioService.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      let ff = data.findEstacion[datoConsultado];
       this.lista.push(ff);
       return console.log(this.lista);
      //return console.log(data.findEstacion[datoConsultado]);
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

  consultarXId(){

  }

}
