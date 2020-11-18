import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.page.html',
  styleUrls: ['./gasolinera.page.scss'],
})
export class GasolineraPage implements OnInit {
  datos:any={
    nombre:'',
    permiso:'',
    latitud:null,
    longitud:null
  }

  constructor(
    public modalCtrl: ModalController,
    private gasService:GasolineraService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.getGasolinera();
  }

  getGasolinera(){
    return this.gasService.getGas().subscribe((data:any) =>{
      console.log(data);
    })
  }

  postGas(){
    return this.gasService.postGas(this.datos).subscribe((data:any) =>{
      console.log(data);
      this.dissmis();
    });
  }

  dissmis(){
    this.modalCtrl.dismiss();
  }

  enviar(){
    this.postGas();
  }

}
