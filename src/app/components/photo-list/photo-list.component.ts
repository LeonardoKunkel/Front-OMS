import { Component, OnInit } from '@angular/core';
import { EvidenciaElementoUnoService } from 'src/app/services/Elemento1/evidencia-elemento-uno.service';
import { NavController } from '@ionic/angular';
import { EvidenciaMostrarModelPage } from '../../pages/evidencia-mostrar-model/evidencia-mostrar-model.page';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss'],
})
export class PhotoListComponent implements OnInit {
  idImage :String = '';
  photos = [];
  constructor(
    private evidenciaService: EvidenciaElementoUnoService,
    private navCtrl: NavController,
    private evidencia :EvidenciaMostrarModelPage
  ) { }

  ngOnInit() {


    this.evidenciaService.getImages().subscribe((data:any)=>{
     // console.log(data.imagenes);
         this.photos = data.imagenes;
         console.log(this.photos,'fotos');
      
    })
  }


  delete(id:string){
    let idPhotho = id;
    this.evidenciaService.deletePhoto(idPhotho).subscribe((data:any)=>{
      //console.log(data);
    this.goBack();
    })
  }

  goBack(){
    this.evidencia.close();
  }

  download(filename){
    this.evidenciaService.dowloadPhoto(filename).subscribe((data:any)=>{
      console.log(data);
    })
  }


}
