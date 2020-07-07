import { PuntodosService } from './../../services/puntodos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPoliticaPage } from '../edit-politica/edit-politica.page';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { AlertController, IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { MapaService } from 'src/app/services/mapa.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Router } from '@angular/router';
import { PoliticaSpecificPage } from '../politica-specific//politica-specific.page';

@Component({
  selector: 'app-punto-uno',
  templateUrl: './punto-uno.page.html',
  styleUrls: ['./punto-uno.page.scss'],
})
export class PuntoUnoPage implements OnInit {
  datos:any[]=[];
  localizacion: any = {};

  constructor(
    private navCtrl: NavController,
    private estacionService : EstacionServicioDatosService,
    private route :Router,
    private modalCtrl: ModalController
    ) { 
      // this.consulta();
     }

  ngOnInit() {
}
goPuntoProcedimiento() {
  this.navCtrl.navigateForward('/punto-uno-procedimiento')
}
goPuntoEvidencia() {
  this.navCtrl.navigateForward('/punto-uno-evidencia')
}
// getLocalitation() {
//   this.mapaService.getLocalitation().subscribe(( data:any ) => { 
//     this.localizacion = data;
//     console.log(this.localizacion);
//   });
// }

    async goPuntoPolitica(){
      const modal = await this.modalCtrl.create({
        component: PoliticaSpecificPage
      });
      return await modal.present();
    }

//  goPuntoPolitica( id: String){
//   this.route.navigate(['/punto-uno-politica',{custom_id: id}]);
//  }

//  consulta(){
//    this.estacionService.getEstacion().subscribe((data : any) =>{
//       this.datos = data.findEstacion;
//       console.log(this.datos);
//     })
//  }
}
