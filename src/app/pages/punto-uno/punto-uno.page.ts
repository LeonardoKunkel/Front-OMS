import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPoliticaPage } from '../edit-politica/edit-politica.page';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { AlertController, IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-punto-uno',
  templateUrl: './punto-uno.page.html',
  styleUrls: ['./punto-uno.page.scss'],
})
export class PuntoUnoPage implements OnInit {


  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  goPuntoPolitica(){
    console.log('bienvenido');
    
    this.navCtrl.navigateForward('/punto-uno-politica')
  }
  goPuntoProcedimiento(){
    this.navCtrl.navigateForward('/punto-uno-procedimiento')
  }
  goPuntoEvidencia(){
    this.navCtrl.navigateForward('/punto-uno-evidencia')
  }

   
  }

  