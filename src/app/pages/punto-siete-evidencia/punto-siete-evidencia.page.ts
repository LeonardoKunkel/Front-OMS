import { Component, OnInit } from '@angular/core';
import { EvidenciaElementoSieteService } from '../../services/Elemento 7/evidencia-elemento-siete.service';

@Component({
  selector: 'app-punto-siete-evidencia',
  templateUrl: './punto-siete-evidencia.page.html',
  styleUrls: ['./punto-siete-evidencia.page.scss'],
})
export class PuntoSieteEvidenciaPage implements OnInit {
  photoSelected: String | ArrayBuffer;
  file:File;

  constructor( private _uploadService : EvidenciaElementoSieteService) { }

  ngOnInit() {
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLInputElement){
    this._uploadService.uploadImage(title.value, description.value, this.file).subscribe(data => console.log(data));
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

}
