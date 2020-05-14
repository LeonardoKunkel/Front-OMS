import { Component, OnInit } from '@angular/core';
import { EvidenciaElementoOnceService } from '../../services/Elemento 11/evidencia-elemento-once.service';

@Component({
  selector: 'app-punto-once-evidencia',
  templateUrl: './punto-once-evidencia.page.html',
  styleUrls: ['./punto-once-evidencia.page.scss'],
})
export class PuntoOnceEvidenciaPage implements OnInit {

  photoSelected: string | ArrayBuffer;
  
  file:File;

  constructor( private _uploadService: EvidenciaElementoOnceService) { }

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
