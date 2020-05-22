import { EvidenciaElementoDieciseisService } from './../../services/Elemento 16/evidencia-elemento-dieciseis.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-punto-dieciseis-evidencia',
  templateUrl: './punto-dieciseis-evidencia.page.html',
  styleUrls: ['./punto-dieciseis-evidencia.page.scss'],
})
export class PuntoDieciseisEvidenciaPage implements OnInit {
  photoSelected: String | ArrayBuffer;
  file: File;
  foto: any;
  constructor( private camera: Camera, private _uploadService: EvidenciaElementoDieciseisService ) { }

  ngOnInit() {
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLInputElement) {
    this._uploadService.uploadImage(title.value, description.value, this.file).subscribe(data => console.log(data));
  }

  onPhotoSelected(event): void {
    if (event.target.files && event.target.files[0]) {
      this. file = <File>event.target.files[0];
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
