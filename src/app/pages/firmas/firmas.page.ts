import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-firmas',
  templateUrl: './firmas.page.html',
  styleUrls: ['./firmas.page.scss'],
})
export class FirmasPage implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'maxWidth': 1,
    'minWidth': 1,
    'canvasWidth': 350,
    'canvasHeight': 300
  };

  constructor(public toast: ToastController) { }

  drawStart() {
    console.log('drawStart');
  }
  drawComplete() {
    console.log(this.signaturePad.toDataURL);
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
    toast.present();
  }

  ngOnInit() {
  }

}
