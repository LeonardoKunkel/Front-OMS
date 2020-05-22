import { Component, OnInit } from '@angular/core';
import { EvidenciaElementoCatorceService } from 'src/app/services/Elemento 14/evidencia-elemento-catorce.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-punto-catorce-evidencia',
  templateUrl: './punto-catorce-evidencia.page.html',
  styleUrls: ['./punto-catorce-evidencia.page.scss'],
})
export class PuntoCatorceEvidenciaPage implements OnInit {
  photoSelected: String | ArrayBuffer;
  file: File;
  foto: any;
  constructor( private camera: Camera, private _uploadService: EvidenciaElementoCatorceService ) { }

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
