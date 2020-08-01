import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PoliticaService } from '../../services/Elemento1/politica.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Router } from '@angular/router';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from '../../services/firma-estacion-service.service';
import { IconoEstacionService } from '../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from '../../services/marca-agua-service.service';


@Component({
  selector: 'politica-specific',
  templateUrl: './politica-specific.page.html',
  styleUrls: ['./politica-specific.page.scss'],
})
export class PoliticaSpecificPage implements OnInit {
  datos:any[]=[];
  politicas:any=[];
  estacione:any[]=[];
  firma:string;
  marcaAgua:String;
  icono:String;

  myImage = null;

  photoSelected: string | ArrayBuffer;
  file : File;
  foto: any;
  constructor(
    private modalCtrl :ModalController,
    private navCtrl: NavController,
    private politicaService: PoliticaService,
    private estacionService: EstacionServicioDatosService,
    private route: Router,
    private pdfMake: PdfMakerService,
    private firmaService :FirmaEstacionServiceService,
    private iconoService: IconoEstacionService,
    private marcaService: MarcaAguaServiceService
  ) { 
    this.consulta();
    this.getStacionService();
    this.getFirma();
    this.getIcono();
    this.getMarca();
    this.imagen64();
  }

  ngOnInit() {
  }
  imagen64(){
 
      this.convertFileDataURLviaFileReader(`../../../assets/FondosEstilos/copyright_footer-07.png`).subscribe(
        base64 =>{
          this.myImage = base64;
          //console.log(this.myImage);
          
        }
        
      )
  }
  convertFileDataURLviaFileReader(url: string){
    return Observable.create(observer =>{
      let xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.onload = function(){
        let reader: FileReader = new FileReader();
        reader.onloadend = function(){
          observer.next(reader.result);
          observer.complete();
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    })
  }



  


  getStacionService(){
    this.estacionService.getEstacion().subscribe((data:any)=>{
      this.estacione = data.findEstacion
     //console.log(this.estacione);
      
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

getFirma(){
 this.firmaService.getFirmaEstacion().subscribe((data:any) => {
   //console.log(data.findFirma[data.findFirma.length -1].firma);
   this.firma = data.findFirma[data.findFirma.length -1].firma;
   
 })
}
getIcono(){
this.iconoService.getPolitica().subscribe((data:any)=>{
  //console.log(data.findPolitica[data.findPolitica.length -1].imagen);
  this.iconoService = data.findPolitica[data.findPolitica.length -1].imagen;
})
}
getMarca(){
this.marcaService.getMarcaAgua().subscribe((data:any) =>{
  //console.log(data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua);
  this.marcaAgua =data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
})
}



pdf(){
  let nombre = this.estacione[0].nombreEstacionServicio;
  let politicaString = this.politicas[0].politica;
  let marca = this.marcaAgua;
  let iconoEstacion = this.iconoService;
  let firmaEstacion = this.firma;
  let footer = this.myImage;
  var fecha = new Date();
  let day = fecha.getDate();
  let month = fecha.getUTCMonth() + 1;
  let year = fecha.getFullYear();

  var dd = {
    userPassword:'123',
    ownerPassword: '123456',
    permissions:{
      printing:'lowResolution'
    },  
    background: function(currentPage, pageSize) {
    return {
        image: `${marca}`, width: 300,height: 350, 
        absolutePosition: {x: 150, y: 160},opacity: 0.5}
  },
  header: function(){
    return {
      table:{
          widths: [150,400],
          heights: [30,10,10],
          body:[
              [
                  {
                      image:`${iconoEstacion}`,
                  width: 65,
                  height: 80,
                  alignment:'center',
                  border:[true,true,false,true],
                  },{
                      text:`${nombre}`,bold:true,fontSize:25,margin:[55,20],
                  border:[false,true,true,true],
                  }
              ],[
                  {
                      text:'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                  },{
                      
                  }
                  ],[
                      {
                        text:'I. POLÍTICA',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                      },{
                          
                      }
                      ]
            ]
      },margin: [22,15],
      
        layout:{
          defaultBorder: false
        }
    };
  },
  footer: function(currentPage, pageCount){
    return {
        table:{
      headerRows:1, 
      widths: [510],
           body : [
           [{columns:[
               'Página' + currentPage.toString() + ' de ' + pageCount,
               {text:`P-SA-01 Rev.0, ${day}/${month}/${year}`,width: 180}
               ]}],
           [{
            image: `${footer}`,
            pageBreak: 'after',
            width: 510,
            height: 60,
             },],
           [''],
               ]
         }, layout : 'headerLineOnly',
        margin: [72,20],
    };
  },
    content:[
        {
            text:`POLÍTICA`,bold:true,alignment: 'center',Style:'header',fontSize:25
        },{
          text:`(SASISOPA)`,bold:true,fontSize:20,alignment:'center'
        },
        {
           text:`\n\n${politicaString}\n\n`,fontSize:17,alignment:'justify'
        },
        //lineas para la firma
          {
      table: {widths: [200], headerRows:1, 
        body: [
          [
              {
                    image:`${firmaEstacion}`,
            width: 180,
            height: 50,       
                  
              }],
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
