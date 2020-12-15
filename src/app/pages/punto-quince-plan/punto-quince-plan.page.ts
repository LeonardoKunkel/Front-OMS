import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';


@Component({
  selector: 'app-punto-quince-plan',
  templateUrl: './punto-quince-plan.page.html',
  styleUrls: ['./punto-quince-plan.page.scss'],
})
export class PuntoQuincePlanPage implements OnInit {
  datosEstacion: any = {
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
  myImage = null;
  firmaRepresentante = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;


  constructor(
    private pdfMaker: PdfMakerService,
    private estacionService: EstacionServicioDatosService,
    private firma :FirmaEstacionServiceService,
    private marca : MarcaAguaServiceService,
    private icono : IconoEstacionService,
    private firmaRepresente : FirmaRepresentanteService
    ) {
      this.getStationService()
      this.imagen64();
      this.getMarcaAgua();
      this.getFirma();
      this.getIcono();
      this.getFirmaRepresentante();
     }

  ngOnInit() {
  }
  getFirmaRepresentante(){
    this.firmaRepresente.getFirmaRepresentante().subscribe((data:any) =>{
      //console.log(data);
       this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length -1].firma;
       //console.log(this.firmaRepresentante);
      
    })
  }

  getStationService(){
    this.estacionService.getEstacion().subscribe((data:any) =>{
      let datoConsultado = data.findEstacion.length -1;
      this.datosEstacion = data.findEstacion[datoConsultado];
  });
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
  
  let marcaAgua = this.marcaAguaEstacion;
  let iconoEstacion = this.iconoEstacion;
  let firmaEstacion = this.firmaEstacion;  
  let footer = this.myImage;
  let ddd = this.datosEstacion;
  var fecha = new Date();
  let day = fecha.getDate();
  let month = fecha.getUTCMonth() + 1;
  let year = fecha.getFullYear();
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
                    text:'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'XV. AUDITORÍAS',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
content: [
    {
        table:{ 
              widths: [38,38,38,38,38,38,38,38,38,38,38,38,],
              heights:[10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,10,20,10,20],
            body:[
                  [
                      {text:`ORIGEN`,fontSize:9,bold:true,fillColor:'#a5c3dd',alignment:'center'},
                      {text:`Programa de auditoría interna`,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`FECHA DE EJECUCIÓN`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3,alignment:'center'},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`Enero de ${year}`,fontSize:9,colSpan:4,bold:true},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`TIPO DE AUDITORÍA`,fontSize:9,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`SISOPA`,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:`CRITERIO`,fontSize:9,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`OBJETIVO DE LA AUDITORÍA`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`OBJETIVO DE LA AUDITORÍA`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`AUDITOR LÍDER`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`AUDITOR 1`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`FECHA Y HORA DE APERTURA `,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`FECHA Y HORA DE CIERRE`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`FECHA Y HORA `,fontSize:9,fillColor:'#a5c3dd'},
                      {text:`ELEMENTO DEL SISTEMA DE ADMINISTRACIÓN `,fontSize:9,fillColor:'#a5c3dd',colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`AUDITOR`,fontSize:9,fillColor:'#a5c3dd',colSpan:2},
                      {text:``,fontSize:9},
                      {text:`OBSERVACIONES`,fontSize:9,fillColor:'#a5c3dd',colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`ASIGNACIÓN DE RECURSOS`,fontSize:9,colSpan:12,bold:true,fillColor:'#a5c3dd'},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`PERSONAL QUE PARTICIPA EN LA AUDITORÍA`,fontSize:9,colSpan:12,bold:true,fillColor:'#a5c3dd'},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],
                ]
        }
    },
    {text:'\n'},{
         table: {
             widths: [200,200,100],
             heights: [30,30],
             body: [
                 [
                     {
                       image:`${firmaRepresentanteTecnico}`,
                       fit:[100,30],
                       alignment:'center',
                       border:[true,true,true,false]
                     },
                     {
                       image:`${firmaEstacion}`,
                       fit:[100,30],
                       alignment:'center',
                       border:[true,true,true,false]
                     },{
                       text:' ',
                       fit:[100,50],
                       alignment:'center',
                       border:[true,true,true,false]
                     }],
                [
                    {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true],fontSize:7},
                    {text:`REVISADO POR:\n ${ddd.maximaAutoridad} \n MAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true],fontSize:7},
                    {text:`FECHA \n ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true],fontSize:7}]
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
  pageMargins: [22,150]

};
 this.pdfMaker.generate(dd,'gaga')
}

pdf2(){
  
  let marcaAgua = this.marcaAguaEstacion;
  let iconoEstacion = this.iconoEstacion;
  let firmaEstacion = this.firmaEstacion;  
  let footer = this.myImage;
  let ddd = this.datosEstacion;
  var fecha = new Date();
  let day = fecha.getDate();
  let month = fecha.getUTCMonth() + 1;
  let year = fecha.getFullYear();
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
                    text:'SISTEMA DE LA ADMINISTRACIÓN DE LA SEGURIDAD INDUSTRIAL SEGURIDAD OPERATIVA Y PROTECCIÓN DEL MEDIO AMBIENTE',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'XV. AUDITORÍAS',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
content: [
    {
        table:{ 
              widths: [38,38,38,38,38,38,38,38,38,38,38,38,],
              heights:[10,10,10,10,10,10,10,10,10,15,15,15,15,15,15,15,15,15,10,20,10,20],
            body:[
                  [
                      {text:`ORIGEN`,fontSize:9,bold:true,fillColor:'#a5c3dd',alignment:'center'},
                      {text:`Programa de auditoría interna`,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`FECHA DE EJECUCIÓN`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3,alignment:'center'},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`Diciembre de ${year}`,fontSize:9,colSpan:4,bold:true},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`TIPO DE AUDITORÍA`,fontSize:9,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`SISOPA`,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:`CRITERIO`,fontSize:9,bold:true,fillColor:'#a5c3dd',alignment:'center',colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`OBJETIVO DE LA AUDITORÍA`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`OBJETIVO DE LA AUDITORÍA`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`AUDITOR LÍDER`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`AUDITOR 1`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`FECHA Y HORA DE APERTURA `,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`FECHA Y HORA DE CIERRE`,fontSize:9,bold:true,fillColor:'#a5c3dd',colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:3},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`FECHA Y HORA `,fontSize:9,fillColor:'#a5c3dd'},
                      {text:`ELEMENTO DEL SISTEMA DE ADMINISTRACIÓN `,fontSize:9,fillColor:'#a5c3dd',colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:`AUDITOR`,fontSize:9,fillColor:'#a5c3dd',colSpan:2},
                      {text:``,fontSize:9},
                      {text:`OBSERVACIONES`,fontSize:9,fillColor:'#a5c3dd',colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:5},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:2},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9,colSpan:4},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`ASIGNACIÓN DE RECURSOS`,fontSize:9,colSpan:12,bold:true,fillColor:'#a5c3dd'},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:`PERSONAL QUE PARTICIPA EN LA AUDITORÍA`,fontSize:9,colSpan:12,bold:true,fillColor:'#a5c3dd'},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],[
                      {text:``,fontSize:9,colSpan:12},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                      {text:``,fontSize:9},
                  ],
                ]
        }
    },
    {text:'\n'},{
         table: {
             widths: [200,200,100],
             heights: [30,30],
             body: [
                 [
                     {
                       image:`${firmaRepresentanteTecnico}`,
                       fit:[100,30],
                       alignment:'center',
                       border:[true,true,true,false]
                     },
                     {
                       image:`${firmaEstacion}`,
                       fit:[100,30],
                       alignment:'center',
                       border:[true,true,true,false]
                     },{
                       text:' ',
                       fit:[100,50],
                       alignment:'center',
                       border:[true,true,true,false]
                     }],
                [
                    {text:`REVISADO POR:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true],fontSize:7},
                    {text:`REVISADO POR:\n ${ddd.maximaAutoridad} \n MAXIMA AUTORIDAD`,alignment:'center',border:[true,false,true,true],fontSize:7},
                    {text:`FECHA \n ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true],fontSize:7}]
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
  pageMargins: [22,150]

};
 this.pdfMaker.generate(dd,'gaga')
}


}
