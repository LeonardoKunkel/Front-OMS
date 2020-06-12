import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PoliticaService } from '../../services/Elemento1/politica.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Router } from '@angular/router';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'politica-specific',
  templateUrl: './politica-specific.page.html',
  styleUrls: ['./politica-specific.page.scss'],
})
export class PoliticaSpecificPage implements OnInit {
  datos:any[]=[];
  politicas:any=[];
  estacione:any[]=[];

  constructor(
    private modalCtrl :ModalController,
    private navCtrl: NavController,
    private politicaService: PoliticaService,
    private estacionService: EstacionServicioDatosService,
    private route: Router,
    private pdfMake: PdfMakerService  
  ) { 
    this.consulta();
    this.getStacionService();
  }

  ngOnInit() {
  }
  getStacionService(){
    this.estacionService.getEstacion().subscribe((data:any)=>{
      this.estacione = data.findEstacion
     console.log(this.estacione);
      
    })
  }
  async close(){
    this.modalCtrl.dismiss();
  }
  postPolitica(id:string){
    this.route.navigate(['/punto-uno-politica',{custom_id:id}])
    this.close();
    
  }
consulta(){
  this.politicaService.getPolitica().subscribe((data: any) =>{
    this.politicas = [data.findPolitica[data.findPolitica.length-1]];
  })
}
pdf(){
  let nombre = this.estacione[0].nombreEstacionServicio;
  let politicaString = this.politicas[0].politica;
  var dd = {
    header: function(){
      return {
            table: {widths: [320, 20, 200],
            heights: [30,10,10],
        body: [
          [{text:`${nombre}`,colSpan:3,bold:true,fontSize:20,alignment:'center'},{},{}],
          [{text:'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',colSpan:3,fontSize:9},{},{}],
          [{text:'I.Politica',colSpan:3,alignment: 'center'},{},{}]
        ]
      }, margin: [22,20]
      };
    },
    footer: function(){
      return {
          table:{
        headerRows:1, 
        widths: [510],
             body : [
             [''],
             [''],
             ['']
                 ]
           }, layout : 'headerLineOnly',
          margin: [72,40]
      };
    },
    
    content:[
        {
            text:`POLITICA`,bold:true,alignment: 'center',Style:'header',fontSize:25
        },{
           text:`\n\n${politicaString}\n\n`,fontSize:17,alignment:'justify'
        },
        //lineas para la firma
          {
      style: 'tableExample',
      table: {widths: [200], headerRows:1, 
        body: [
          [''],
          [{text:'REPRESENTANTE LEGAL',alignment:'center'}],
          ['']
        ]
      },layout : 'headerLineOnly',
          margin: [150,40],
    }
        
        ]
   ,
    pageSize: 'LETTER',
    pageMargins: [72,150]
  };
  this.pdfMake.generate(dd,'P-SA-01 POLÍTICA');

}
}
