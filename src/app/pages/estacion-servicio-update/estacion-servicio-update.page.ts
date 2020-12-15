import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastController } from '@ionic/angular';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';

@Component({
  selector: 'app-estacion-servicio-update',
  templateUrl: './estacion-servicio-update.page.html',
  styleUrls: ['./estacion-servicio-update.page.scss'],
})
export class EstacionServicioUpdatePage implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild(SignaturePad) signaturePad2: SignaturePad;

  idEstacion = null;
  datos: any = {};
  datos2: any = {};

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };

  photoSelected: string | ArrayBuffer;
  file: File;
  fotoSeleccionada: string;
  photoSelected2: string | ArrayBuffer;
  file2: File;
  fotoSeleccionada2: string;

  constructor(
    private route: ActivatedRoute,
    private estacionServive: EstacionServicioDatosService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    public toast: ToastController,
    private firmasService: FirmaEstacionServiceService,
    private firmaRService: FirmaRepresentanteService,
    private iconsEstacionService: IconoEstacionService,
    private marcaAgua: MarcaAguaServiceService,
  ) { }

  drawStart() {
    console.log('drawStart');
  }
  drawComplete() {
    this.datos.firma = this.signaturePad.toDataURL();
    // console.log(this.signaturePad.toDataURL());
  }

  drawStart2() {
    console.log('drawStart2');
  }
  drawComplete2() {
    this.datos.firma = this.signaturePad2.toDataURL();
    // console.log(this.signaturePad.toDataURL());
  }

  clear() {
    this.signaturePad.clear();
    console.log('Borrado1');
  }

  clear2() {
    this.signaturePad2.clear();
    console.log('Borrado2');
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

  async agregarFirma2() {
    console.log('aceptar firma');
    const toast = await this.toast.create({
      message: 'Firma Guardada',
      duration: 2000
    });
    this.postFirmaR(this.datos2);
    toast.present();
  }

  ngOnInit() {
    this.idEstacion = this.route.snapshot.paramMap.get('custom_id');
   // console.log('id traido',this.idEstacion);
    this.getSpecificStation(this.idEstacion);
  }

  getSpecificStation(id: string) {
    this.estacionServive.getEstacionById(id).subscribe((data: any) => {
      this.datos = data.estacion;
      // console.log(this.datos);
    });
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

  postFirmaR(body) {
    this.firmaRService.postFirmaRepresentante(body).subscribe((data: any) => {
      console.log(data);
    });
  }

  getFirmaRep() {
    this.firmaRService.getFirmaRepresentante().subscribe((data: any) => {
      console.log(data);
    });
  }

  async update() {
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

  updateStation() {
    this.estacionServive.updateStation(this.idEstacion , this.datos).subscribe(data => {
      console.log(data);
    });
    this.navCtrl.navigateForward('/main/tabs/tab1');
  }

  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0] as File;
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = event => {
        this.photoSelected = reader.result;
        const imagenB64: any = {
          imagen: reader.result
        };
        console.log(imagenB64);
        this.crear(imagenB64);
      };
    }
  }

  onPhotoSelected2(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file2 = event.target.files[0] as File;
      const reader = new FileReader();
      reader.readAsDataURL(this.file2);
      reader.onload = event => {
        this.photoSelected2 = reader.result;
        const imagenB64: any = {
          marcaAgua: reader.result
        };
        console.log(imagenB64);
        this.crearMarcaAgua(imagenB64);
      };
    }
  }

  crear(recevent) {
    this.iconsEstacionService.createPolitica(recevent).subscribe((data: any) => {
      console.log(data);
    });
  }

  consultar() {
    this.iconsEstacionService.getPolitica().subscribe((data: any) => {
      // console.log(data.findPolitica[data.findPolitica.length - 1].imagen);
      this.fotoSeleccionada = data.findPolitica[data.findPolitica.length - 1].imagen;
    });
  }

  crearMarcaAgua(resive) {
    this.marcaAgua.createMarcaAgua(resive).subscribe((data: any) => {
      console.log(data);
    });
  }

  consultarMarca() {
    this.marcaAgua.getMarcaAgua().subscribe((data: any) => {
      this.fotoSeleccionada2 = data. findMarcaAgua[data. findMarcaAgua.length - 1].marcaAgua;
    });
  }

}
