import { Component, OnInit } from '@angular/core';
import { EvidenciaElementoCuatroService} from '../../services/Elemento 4/evidencia-elemento-cuatro.service'


@Component({
  selector: 'app-cuatro3',
  templateUrl: './cuatro3.page.html',
  styleUrls: ['./cuatro3.page.scss'],
})
export class Cuatro3Page implements OnInit {

  photoSelected: string | ArrayBuffer;
  
  file:File;

  constructor( private _uploadService: EvidenciaElementoCuatroService) { }

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
