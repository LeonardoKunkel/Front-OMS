import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastController } from '@ionic/angular';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.page.html',
  styleUrls: ['./firmas.page.scss'],
})
export class FirmasPage implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  datos: any = {
    firma: ''
  };

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'maxWidth': 1,
    'minWidth': 1,
    'canvasWidth': 300,
    'canvasHeight': 100,
  };

  constructor(
    public toast: ToastController,
    private firmasService: FirmaEstacionServiceService
    ) { }

  drawStart() {
    console.log('drawStart');
  }
  drawComplete() {
    this.datos.firma = this.signaturePad.toDataURL();
    // console.log(this.signaturePad.toDataURL());
  }
  clear() {
    this.signaturePad.clear();
  }
  async agregarFirma() {
    console.log('aceptar firma');
    const toast = await this.toast.create({
      message: 'Firma Guardada',
      duration: 2000
    });
    this.postFirma(this.datos);
    toast.present();
  }

  ngOnInit() {
  }

  postFirma(body) {
    this.firmasService.postFirmaEstacion(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  getFirmas() {
    this.firmasService.getFirmaEstacion().subscribe((data: any) => {
      console.log(data);
    });
  }

}
