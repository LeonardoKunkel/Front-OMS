import { Component, OnInit, ViewChild, ElementRef,Input } from "@angular/core";
import { AlertController, IonSlides, ActionSheetController } from "@ionic/angular";
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PoliticaService } from 'src/app/services/Elemento1/politica.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
selector: "app-punto-uno-politica",
templateUrl: "./punto-uno-politica.page.html",
styleUrls: ["./punto-uno-politica.page.scss"]
})
export class PuntoUnoPoliticaPage implements OnInit {
  idEstacion = null;
  datos:any[]= [];
  @ViewChild('politica1') politicaUno;
  @ViewChild('politica2') politicaDos;
  @ViewChild('politica3') politicaTres;

// doRefresh(event) {
//   //this.consultarDatos();
//   this.consultar();
//   setTimeout(() => {
//     console.log("Async operation has ended");
//     event.target.complete();
//   }, 1000);
// }



constructor(
  public alertController: AlertController,
  private pdfMakerService: PdfMakerService,
  private politicaService: PoliticaService,
  private estacionServicioService: EstacionServicioDatosService,
  private route: ActivatedRoute
) {
}

ngOnInit() {
  this.idEstacion = this.route.snapshot.paramMap.get('custom_id');
  console.log('Id traido',this.idEstacion);
  this.getStationSpecific(this.idEstacion);
  
}

// getStationSpecific(){
//   this.estacionServicioService.getEstacion().subscribe((data:any) =>{
//     console.log(data,lo);
    
//   })
// }

getStationSpecific(id:string){
  this.estacionServicioService.getEstacionById(id).subscribe((data:any)=>{
    this.datos = [data.estacion];
    console.log(this.datos);
    
  })
}

politicaOne(){
 let politicaSeleccionada = this.politicaUno.nativeElement.innerText;
 this.postPolitica(politicaSeleccionada);
}

politicaTwo(){
 let politicaSeleccionada = this.politicaDos.nativeElement.innerText;
 this.postPolitica(politicaSeleccionada);
}

politicaTree(){
 let politicaSeleccionada = this.politicaTres.nativeElement.innerText;
 this.postPolitica(politicaSeleccionada);
}

postPolitica(e){
  let newPolitica ={
    politica: e
}
  let politica = e;
  this.politicaService.createPolitica(newPolitica).subscribe((data:any) =>{console.log(data);})
}

getPolitica(id:String){
  this.politicaService.getPolitica()
}






}