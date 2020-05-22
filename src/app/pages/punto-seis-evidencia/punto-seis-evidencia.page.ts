import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EvidenciaElementoSeisService } from '../../services/Elemento 6/evidencia-elemento-seis.service';

@Component({
  selector: 'app-punto-seis-evidencia',
  templateUrl: './punto-seis-evidencia.page.html',
  styleUrls: ['./punto-seis-evidencia.page.scss'],
})
export class PuntoSeisEvidenciaPage implements OnInit {

  photoSelected: string | ArrayBuffer;
  
  file:File;
  foto: any;
  constructor(private camera: Camera,
    private _uploadService:EvidenciaElementoSeisService) { }

  ngOnInit() {
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLInputElement){
    this._uploadService.uploadImage(title.value, description.value, this.file).subscribe(data => console.log(data));
  }

  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //Vista de la imagen
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  capturarFoto() {
    this.camera.getPicture({
      quality: 100,
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
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }).then(imagenData => this.foto = 'data:image/jpeg;base64' + imagenData );
  }

}
