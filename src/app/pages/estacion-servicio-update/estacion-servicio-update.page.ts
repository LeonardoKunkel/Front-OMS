import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { IconosEstacionPage } from '../iconos-estacion/iconos-estacion.page';
@Component({
  selector: 'app-estacion-servicio-update',
  templateUrl: './estacion-servicio-update.page.html',
  styleUrls: ['./estacion-servicio-update.page.scss'],
})
export class EstacionServicioUpdatePage implements OnInit {
  idEstacion = null;
  datos:any={};

  constructor(
    private route : ActivatedRoute,
    private estacionServive : EstacionServicioDatosService,
    private modalCtrl : ModalController,
    private alertCtrl : AlertController,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
    this.idEstacion = this.route.snapshot.paramMap.get('custom_id');
   // console.log('id traido',this.idEstacion);
    this.getSpecificStation(this.idEstacion);
  } 
  goFirmas() {
    this.navCtrl.navigateForward('/firmas');
  }

  getSpecificStation(id : string){
    this.estacionServive.getEstacionById(id).subscribe((data:any) =>{
      this.datos = data.estacion;
      //console.log(this.datos);
      
    })
  }

  async update(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar!',
      message: 'Presione <strong>OK</strong> para continuar!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.updateStation();
          }
        }
      ]
    });

    await alert.present();

  }

  updateStation(){
    this.estacionServive.updateStation(this.idEstacion , this.datos).subscribe(data =>{ console.log(data);})
    this.navCtrl.navigateForward('/main/tabs/tab1');
  }

  async iconEstacion(){
    const modal = await this.modalCtrl.create({
      component: IconosEstacionPage,
    });
    return await modal.present();}
  }



