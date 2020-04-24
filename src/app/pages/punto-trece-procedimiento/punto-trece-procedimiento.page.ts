import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnexoProcedimientoModelPage} from '../anexo-procedimiento-model/anexo-procedimiento-model.page';
@Component({
  selector: 'app-punto-trece-procedimiento',
  templateUrl: './punto-trece-procedimiento.page.html',
  styleUrls: ['./punto-trece-procedimiento.page.scss'],
})
export class PuntoTreceProcedimientoPage implements OnInit {

  constructor( private modalCtrl:ModalController ) { }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: AnexoProcedimientoModelPage
    });
    console.log('si sirve');
    return await modal.present();
  }

}
