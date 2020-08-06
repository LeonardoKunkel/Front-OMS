import { Component, OnInit } from '@angular/core';import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from '../../services/firma-estacion-service.service';
import { IconoEstacionService } from '../../services/iconosEstacion.service';
import { MarcaAguaServiceService } from '../../services/marca-agua-service.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-punto-dos-listado',
  templateUrl: './punto-dos-listado.page.html',
  styleUrls: ['./punto-dos-listado.page.scss'],
})
export class PuntoDosListadoPage implements OnInit {
  myImage = null;
  firmaEstacion = null;
  firmaRepresentante = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;
  datosEstacion:any={
    calleNumero:'',
    ciudad:'',
    colonia:'',
    correoElectronico:'',
    cp:'',
    estado:'',
    gerenteEstacion:'',
    maximaAutoridad:'',
    nombreEstacionServicio:'',
    representanteTecnico:'',
    telefono:''
  };
  constructor(
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService,
    private datosEstacionService:EstacionServicioDatosService,
    private firmaRepresente : FirmaRepresentanteService,
    private pdfMaker : PdfMakerService
  ) {
    this.getDatosEstacion();
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
    this.getFirmaRepresentante();
   }

  ngOnInit() {
  }
  getDatosEstacion(){
    this.datosEstacionService.getEstacion().subscribe((data:any) =>{
      //console.log(data.findEstacion[data.findEstacion.length -1]);
      this.datosEstacion = data.findEstacion[data.findEstacion.length -1];
    })
  }
  getIcono(){
    this.icono.getPolitica().subscribe((data:any)=>{
     // console.log(data);
      this.iconoEstacion =  data.findPolitica[data.findPolitica.length -1].imagen;
    })
  }
  getMarcaAgua(){
    this.marca.getMarcaAgua().subscribe((data:any)=>{
      //console.log(data);
      this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length -1].marcaAgua;
    })
  }
  getFirma(){
    this.firma.getFirmaEstacion().subscribe((data:any) =>{
      //console.log(data);
      this.firmaEstacion =this.firma = data.findFirma[data.findFirma.length -1].firma;
    })
  }
  getFirmaRepresentante(){
    this.firmaRepresente.getFirmaRepresentante().subscribe((data:any) =>{
      //console.log(data);
       this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length -1].firma;
       //console.log(this.firmaRepresentante);
      
    })
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

  pdf(){
    var fecha = new Date();
    let day = fecha.getDate();
    let month = fecha.getUTCMonth() + 1;
    let year = fecha.getFullYear();
    let marcaAgua = this.marcaAguaEstacion;
    let iconoEstacion = this.iconoEstacion;
    let firmaEstacion = this.firmaEstacion;
    let footer = this.myImage;
    let ddd = this.datosEstacion;
    let firmaRepresentanteTecnico = this.firmaRepresentante;
    // playground requires you to assign document definition to a variable called dd

var dd = {
  background: function(currentPage, pageSize) {
  return {
      image: `${marcaAgua}`, width: 300,height: 350, 
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
                    text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,margin:[55,20],
                border:[false,true,true,true],
                }
            ],[
                {
                    text:'LISTADO DE PELIGROS Y ASPECTOS AMBIENTALES',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'III. IDENTIFICACIÓN DE PELIGROS Y ASPECTOS AMBIENTALES Y EVALUACIÓN DE RIESGOS E IMPACTOS AMBIENTALES',fontSize:9,bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
               {text:`P-SA-03 Rev.0, ${day}/${month}/${year}`,width: 180}
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
content: [
    {
        table:{
              widths: [15,100,100,155,155],
            body:[
                [
                  {text:'ÁREA, EQUIPO O PROCESO:',fontSize:9,bold:true,colSpan:5,fillColor:'#a5c3dd'},
                  {},
                  {},
                  {},
                  {},
                ],[
                  {text:'No.',fontSize:9,bold:true,fillColor:'#a5c3dd'},
                  {text:'ACTIVIDAD ASOCIADA',fontSize:9,bold:true,fillColor:'#a5c3dd'},
                  {text:'CONDICIÓN DE OPERACIÓN',fontSize:9,bold:true,fillColor:'#a5c3dd'},
                  {text:'PELIGRO',fontSize:9,bold:true,fillColor:'#a5c3dd'},
                  {text:'ASPECTO AMBIENTAL',fontSize:9,bold:true,fillColor:'#a5c3dd'},
                ],[
                  {text:'1',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'2',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'3',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'4',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'5',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'6',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'7',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'8',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'9',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'10',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'11',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'12',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'13',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'14',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'15',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'16',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'17',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'18',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'19',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'20',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'20',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'21',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'22',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'23',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ],[
                  {text:'24',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                  {text:'',fontSize:7},
                ]
                ]
        }
    },
      {
        text: '\n'
      },
      {
          table: {
            widths: [250,250],
            heights: [20,20],
               body: [
                   [
                       {
                         image:`${firmaRepresentanteTecnico}`,
                         fit:[100,30],
                         alignment:'center',
                         border:[true,true,true,false],
                       },{
                         image:`${firmaEstacion}`,
                         fit:[100,30],
                         alignment:'center',
                         border:[true,true,true,false],
                       }],
                  [
                      {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',fontSize:8,border:[true,false,true,true]},
                      {text:`APROBADO POR:\n${ddd.maximaAutoridad}\nMAXIMA AUTORIDAD`,alignment:'center',fontSize:8,border:[true,false,true,true]},
                  ]
               ]
          },
      layout:{
        defaultBorder: false
      },
      margin:[22,0]
      }
    ]
 ,
  pageSize: 'LETTER',
  pageMargins: [22,140]

};
this.pdfMaker.generate(dd,'jdj');

    
  }
  }

