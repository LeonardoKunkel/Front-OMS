import { Component, OnInit,ViewChild } from '@angular/core';
import { ModalController , IonCard, NavController } from '@ionic/angular';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estacion-servicio-model',
  templateUrl: './estacion-servicio-model.page.html',
  styleUrls: ['./estacion-servicio-model.page.scss'],
})
export class EstacionServicioModelPage implements OnInit {

  estacion:any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private estacionServicioService:EstacionServicioDatosService,
    private route: Router,
    private navCtrl: NavController
    ) {
      this.consultarDatos();
     }

  consultarDatos(){
    this.estacionServicioService.getEstacion().subscribe((data:any) =>{
      this.estacion = data.findEstacion;
      //console.log(this.estacion);
    })
  }

  updateEstacion( id :string){
    this.route.navigate(['/estacion-servicio-update',{custom_id: id}]);
    this.dismiss();
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed' : true
    });
  }

}
