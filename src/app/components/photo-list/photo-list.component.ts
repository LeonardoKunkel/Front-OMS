import { Component, OnInit } from '@angular/core';
import { EvidenciaElementoUnoService } from 'src/app/services/Elemento1/evidencia-elemento-uno.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  photos = [];
  constructor(
    private evidenciaService: EvidenciaElementoUnoService
  ) { }

  ngOnInit() {
    // this.evidenciaService.getPhoto().subscribe((data:any)=>{
    //   // console.log(data.imagenes,'listaPage');
    //   // this.photos = data.imagenes;
    //   // console.log(this.photos,'fotos');
      
      
    // }
    // )
    this.evidenciaService.getPhoto().subscribe((data:any)=>{
     // console.log(data.imagenes);
        this.photos = data.imagenes;
        console.log(this.photos,'fotos');
      
    })
  }

  onClick(id){
    this.evidenciaService.deleteImage(id).subscribe((data:any)=>{
      console.log(data);
      
    })
  }

}
