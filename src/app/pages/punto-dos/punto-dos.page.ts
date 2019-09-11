import { PuntodosService } from './../../services/puntodos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-punto-dos',
  templateUrl: './punto-dos.page.html',
  styleUrls: ['./punto-dos.page.scss'],
})
export class PuntoDosPage implements OnInit {

  puntoDos: any[] = [];

  puntodos:any = {
    compresor: false,
    hidroneumatico: false,
    palantaEmergencia: false,
    pararayos: false,
    cisterna: false,
    bombaAgua: false,
    cambioAceite: false,
    bodegaLubricantes: false,
    residuosPeligrosos: false
  };

  @ViewChild('slider') slider: IonSlides

  constructor(private alertCtrl: AlertController,private navCtrl: NavController, private PuntodosService: PuntodosService, private location: Location) {
    this.cargarPuntoDos();
    console.log(this.puntoDos);
    
   }

  ngOnInit() {
    this.slider.lockSwipes(true);
  }

  async enviarPuntoDos() {
    const alert = await this.alertCtrl.create({
      header: 'Importante',
      message: '<strong>Guardar Estos elementos</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            const creado = this.PuntodosService.createPuntoDos(this.puntodos);
            this.puntodos = {
              compresor: false,
              hidroneumatico: false,
              palantaEmergencia: false,
              pararayos: false,
              cisterna: false,
              bombaAgua: false,
              cambioAceite: false,
              bodegaLubricantes: false,
              almacenResiduosPeligrosos: false
            }
          }
        }
      ]
    });

    await alert.present();
  }


  segmentChanged(event) {
    const value = event.detail.value;
    
    if(value === "form") {
      this.slider.lockSwipes(false);
      this.slider.slideTo(1);
      this.slider.lockSwipes(true);
    } else if(value === "proced"){
      this.slider.lockSwipes(false);
      this.slider.slideTo(0);
      this.slider.lockSwipes(true);
    }
  }

  cargarPuntoDos() {
    this.PuntodosService.getPuntoDos().subscribe((data:any) => {
      console.log(data);
      data.puntoDos = this.puntoDos;
      console.log(this.puntoDos);
      
    })
  }
 
}
