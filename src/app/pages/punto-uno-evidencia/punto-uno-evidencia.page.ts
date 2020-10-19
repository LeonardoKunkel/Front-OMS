import { Platform, ModalController, NavController } from '@ionic/angular';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
//import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {EvidenceElement1PhotoService } from '../../services/EvidencesServices/evidence-element1-photo.service';
import { EvidenciaMostrarModelPage } from '../evidencia-mostrar-model/evidencia-mostrar-model.page';
@Component({
  selector: 'app-punto-uno-evidencia',
  templateUrl: './punto-uno-evidencia.page.html',
  styleUrls: ['./punto-uno-evidencia.page.scss'],
})
export class PuntoUnoEvidenciaPage implements OnInit {

  photoSelected: string | ArrayBuffer;
  file : File;
  foto: any;
  uploadedFiles: Array <File>;
  photos  = [];
  constructor(private camera: Camera,
     private platform: Platform, 
     private document: DocumentViewer,
     private transfer: FileTransfer,
     private _uploadService:EvidenceElement1PhotoService,
     private modalCtrl : ModalController,
     private navCtrl : NavController
     ) { }

  ngOnInit() {
    this.getPhoto();
  }

  abrirArchivos() {
    const options: DocumentViewerOptions = {
      title:'Evidencia'
    };
    this.document.viewDocument('assets/CARTA RESPONSIVA CONTRATISTAS.pdf', 'aplication/pdf', options);
  }


  capturarFoto() {
    this.camera.getPicture({
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }).then(imagenData => this.foto = 'data:image/jpeg;base64' + imagenData );
  }

  buscarFoto() {
    this.camera.getPicture({
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }).then(imagenData => this.foto = 'data:image/jpeg;base64' + imagenData );
  }

  getPhoto(){
    this._uploadService.getImages().subscribe((data:any) =>{
      this.photos = data.images;
      console.log(this.photos);
    })
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLInputElement){
    this._uploadService.uploadImage(title.value, description.value, this.file).subscribe(data => console.log(data));
    this.navCtrl.navigateForward('/punto-uno');
  }
  
   onPhotoSelected(event): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Vista de la imagen
      const reader = new FileReader();
      reader.onload = e =>this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
   }
  
   async openModal(){
    const modal = await this.modalCtrl.create({
      component: EvidenciaMostrarModelPage
    });
    return await modal.present();
  }
}

