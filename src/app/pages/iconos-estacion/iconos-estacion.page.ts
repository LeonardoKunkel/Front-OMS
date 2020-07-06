import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { read } from 'fs';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';

@Component({
  selector: 'app-iconos-estacion',
  templateUrl: './iconos-estacion.page.html',
  styleUrls: ['./iconos-estacion.page.scss'],
})
export class IconosEstacionPage implements OnInit {

  photoSelected: string | ArrayBuffer;
  file : File;
  fotoSeleccionada:String;
  photoSelected2: string | ArrayBuffer;
  file2 : File;
  fotoSeleccionada2:String;

  constructor( private modalController:ModalController,
    private pdfMake:PdfMakerService,
    private iconsEstacionService:IconoEstacionService,
    private marcaAgua: MarcaAguaServiceService,
    private navCtrl: NavController) {
      this.consultar();
      this.consultarMarca();
     }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  

 onPhotoSelected(event): void{
  if(event.target.files && event.target.files[0]){
    this.file = <File>event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = event =>{
      this.photoSelected = reader.result;
        let imagenB64:any={
          imagen:reader.result
          }
          console.log(imagenB64);
         this.crear(imagenB64); 
         this.closeModal();
        }
  }

 }
  

 onPhotoSelected2(event): void{
  if(event.target.files && event.target.files[0]){
    this.file2 = <File>event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.file2);
    reader.onload = event =>{
      this.photoSelected2 = reader.result;
        let imagenB64:any={
          marcaAgua:reader.result
          }
          console.log(imagenB64);
         this.crearMarcaAgua(imagenB64); 
         this.closeModal();
        }
  }

 }

 
 
  crear(recevent){
    this.iconsEstacionService.createPolitica(recevent).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
 consultar(){
   this.iconsEstacionService.getPolitica().subscribe((data:any)=>{
    //console.log(data.findPolitica[data.findPolitica.length - 1].imagen);
     this.fotoSeleccionada= data.findPolitica[data.findPolitica.length - 1].imagen;
   })
 }

 crearMarcaAgua(resive){
this.marcaAgua.createMarcaAgua(resive).subscribe((data:any) =>
  console.log(data)
)
 }

 consultarMarca(){
  this.marcaAgua.getMarcaAgua().subscribe((data:any) =>{
    this.fotoSeleccionada2= data. findMarcaAgua[data. findMarcaAgua.length - 1].marcaAgua;
    
  })
 }
}