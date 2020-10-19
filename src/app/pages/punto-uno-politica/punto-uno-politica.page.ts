import { Component, OnInit, ViewChild, ElementRef,Input } from "@angular/core";
import { AlertController, IonSlides, ActionSheetController, NavController } from "@ionic/angular";
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PoliticaService } from 'src/app/services/Elemento1/politica.service';
import { EstacionServicioDatosService } from '../../services/estacion-servicio-datos.service';
import { ActivatedRoute } from '@angular/router';
import { SelecionPoliticaGraficaService } from 'src/app/services/Elemento1/selecion-politica-grafica.service';

@Component({
selector: 'app-punto-uno-politica',
templateUrl: './punto-uno-politica.page.html',
styleUrls: ['./punto-uno-politica.page.scss']
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

  politicaResultado:any={
    politica:''
  }
  valorGraph : any ={
    selecionPolitica :null
  } 

constructor(
  public alertController: AlertController,
  private pdfMakerService: PdfMakerService,
  private politicaService: PoliticaService,
  private estacionServicioService: EstacionServicioDatosService,
  private route: ActivatedRoute,
  private navCtrl: NavController,
  private graph : SelecionPoliticaGraficaService
) {
}

ngOnInit() {
  this.idEstacion = this.route.snapshot.paramMap.get('custom_id');
  //console.log('Id traido',this.idEstacion);
  this.getStationSpecific(this.idEstacion);
  
}

  public options(item): void{
    console.log(this.politicaResultado.politica);
    if (this.politicaResultado.politica === 'Política1') {
      this.politicaOne();
      this.presentAlert();
    }
    if (this.politicaResultado.politica === 'Política2') {
      this.politicaTwo();
      this.presentAlert();
    }
    if (this.politicaResultado.politica === 'Política3') {
      this.politicaTree();
      this.presentAlert();
    }
    
  }

async presentAlert() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirmar!',
    message: '<strong>Deberas divulgar esta politica con todos tus empleados</strong>!!!',
    inputs:[
      {
        name: 'radioButton',
        type: 'radio',
        label: 'Checkbox 1',
        value: '50',
        checked: false
      }
    ],
    buttons: [{
      text:'Entendido',
      role:'Ok',
      cssClass:'secondary',
      handler: (blah) =>{
        if(blah === '50'){
          this.valorGraph.selecionPolitica = 50;
          this.postGraph(this.valorGraph);
          console.log(this.valorGraph);
        }else{
          this.valorGraph.selecionPolitica = 0;
          this.postGraph(this.valorGraph);
          console.log(this.valorGraph);
        }
        //console.log(blah);
        this.politicaNav();
      }
    }],
    backdropDismiss: false
  });

  await alert.present();
}

postGraph(value){
  this.graph.postPoliticaGrafica(value).subscribe((data:any)=>{
    console.log(data);
  })
}

getStationSpecific(id:string){
  this.estacionServicioService.getEstacionById(id).subscribe((data:any)=>{
    this.datos = [data.estacion];
    //console.log(this.datos);
    
  })
}
  politicaNav(){
    this.navCtrl.navigateForward('/punto-uno');
  }

politicaOne(){
  this.presentAlert();
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
