import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'

@Component({
  selector: 'app-punto-uno-evidencia',
  templateUrl: './punto-uno-evidencia.page.html',
  styleUrls: ['./punto-uno-evidencia.page.scss'],
})
export class PuntoUnoEvidenciaPage implements OnInit {
  image: string;
  constructor(private camera:Camera) { }

  ngOnInit() {
  }

  takePicture(){
    const options:CameraOptions={
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options)
    .then((ImageData)=>{
      this.image = 'data:image/jpeg;base64,'+ ImageData;//puede ser de aqui
    },(err)=>{
      console.log(err);
    });
  }
}
