import { Component, OnInit } from '@angular/core';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-ocho-solicitud',
  templateUrl: './punto-ocho-solicitud.page.html',
  styleUrls: ['./punto-ocho-solicitud.page.scss'],
})
export class PuntoOchoSolicitudPage implements OnInit {
  datosEstacion: any = {
    calleNumero: '',
    ciudad: '',
    colonia: '',
    correoElectronico: '',
    cp: '',
    estado: '',
    gerenteEstacion: '',
    maximaAutoridad: '',
    nombreEstacionServicio: '',
    representanteTecnico: '',
    telefono: ''
  };
  myImage = null;
  firmaRepresentante = null;
  firmaEstacion = null;
  iconoEstacion = null;
  marcaAguaEstacion = null;

  constructor(
    private estacionService: EstacionServicioDatosService,
    private firma: FirmaEstacionServiceService,
    private marca: MarcaAguaServiceService,
    private icono: IconoEstacionService,
    private firmaRepresente: FirmaRepresentanteService,
    private pdfMaker: PdfMakerService,
    ) { }

  ngOnInit() {
    this.imagen64();
    this.getMarcaAgua();
    this.getFirma();
    this.getIcono();
    this.getFirmaRepresentante();
    this.getStationService();
  }
  getFirmaRepresentante() {
    this.firmaRepresente.getFirmaRepresentante().subscribe((data: any) => {
      // console.log(data);
      this.firmaRepresentante = data.findFirmaRepresentante[data.findFirmaRepresentante.length - 1].firma;
      // console.log(this.firmaRepresentante);
    });
  }

  getStationService() {
    this.estacionService.getEstacion().subscribe((data: any) => {
      const datoConsultado = data.findEstacion.length - 1;
      this.datosEstacion = data.findEstacion[datoConsultado];
    });
}
getIcono() {
  this.icono.getPolitica().subscribe((data: any) => {
   // console.log(data);
    this.iconoEstacion =  data.findPolitica[data.findPolitica.length - 1].imagen;
  });
}
getMarcaAgua(){
  this.marca.getMarcaAgua().subscribe((data: any) => {
    // console.log(data);
    this.marcaAguaEstacion = data.findMarcaAgua[data.findMarcaAgua.length - 1].marcaAgua;
  });
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
                    text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:20,margin:[55,20],
                border:[false,true,true,true],
                }
            ],[
                {
                    text:'SOLICITUD DE CAMBIOS',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'VIII. CONTROL DE DOCUMENTOS',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
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
                    widths: [120,230,90,90],
                body:[
                    [{text:`CODIFICACIÓN`,bold:true,fillColor:'#a5c3dd',fontSize:7},{},{text:`FECHA DE SOLICITUD`,bold:true,fillColor:'#a5c3dd',fontSize:7},{}],
                    [{text:`NOMBRE DEL DOCUMENTO`,bold:true,fillColor:'#a5c3dd',fontSize:7},{text:'',colSpan:3},{},{}],
                    [{text:`ELEMENTO DEL SISTEMA`,bold:true,fillColor:'#a5c3dd',fontSize:7},{text:'',colSpan:3},{},{}],
                    [{text:`NOMBRE DEL SOLICITANTE`,bold:true,fillColor:'#a5c3dd',fontSize:7},{},{text:`PUESTO`,bold:true,fillColor:'#a5c3dd',fontSize:7},{}]
                    ]
            }
        },{text:'\n'},{
            table:{
                    widths: [255,10,255,10],
                body:[
                    [{text:`TIPO DE DOCUMENTO`,bold:true,fillColor:'#a5c3dd',fontSize:9,colSpan:4},{},{},{}],
                    [{text:`PROCEDIMIENTO DE SISTEMA`,fontSize:7},{text:``,fontSize:8},{text:`PROCEDIMIENTO ESPECÍFICO`,fontSize:7},{text:``,fontSize:8}],
                    [{text:`FORMATO DE SISTEMA`,fontSize:7},{text:``,fontSize:8},{text:`FORMATO OPERATIVO`,fontSize:7},{text:``,fontSize:8}],
                    [{text:`ORIGEN DEL CAMBIO`,bold:true,fillColor:'#a5c3dd',fontSize:9,colSpan:4},{},{},{}],
                    [{text:`SUGERENCIA`,fontSize:7},{text:``,fontSize:8},{text:`HALLAZGO DE AUDITORÍA`,fontSize:7},{text:``,fontSize:8}],
                    [{text:`RECOMENDACIÓN ICR`,fontSize:7},{text:``,fontSize:8},{text:`ACCIÓN DE MEJORA`,fontSize:7},{text:``,fontSize:8}],
                    [{text:`CAMBIO DE TECNOLOGÍA`,fontSize:7},{text:``,fontSize:8},{text:`CAMBIO EN EL PROCESO`,fontSize:7},{text:``,fontSize:8}],
                    ]
            }
        },{
            text:'\n'
        },{
            table:{
                    widths: [255,10,255,10],
                    heights: [10,40,10,40,10,10,10,40],
                body:[
                        [{text:'ESTADO ACTUAL',bold:true,fillColor:'#a5c3dd',fontSize:7,colSpan:4},{},{},{}],
                        [{text:'',colSpan:4},{},{},{}],
                        [{text:'CAMBIO PROPUESTO',bold:true,fillColor:'#a5c3dd',fontSize:7,colSpan:4},{},{},{}],
                        [{text:'',colSpan:4},{},{},{}],
                        [{text:'RESULTADO DE LA EVALUACIÓN',bold:true,fillColor:'#a5c3dd',fontSize:7,colSpan:4},{},{},{}],
                        [{text:`ACEPTADA`,fontSize:7},{},{text:`ACEPTADA`,fontSize:7},{}],
                        [{text:'MOTIVO DE LA ACEPTACIÓN O RECHAZO',bold:true,fillColor:'#a5c3dd',fontSize:7,colSpan:4},{},{},{}],
                        [{text:'',colSpan:4},{},{},{}],
                    ]
            }
        },{
            text:'\n'
        },{
             table: {
             widths: [360,185],
             heights: [30,30],
             body: [
                 [
                     {
                       image:`${firmaRepresentanteTecnico}`,
                       fit:[100,50],
                       alignment:'center',
                       border:[true,true,true,false]
                     },{
                       text:' ',
                       fit:[100,50],
                       alignment:'center',
                       border:[true,true,true,false]
                     }],
                [
                    {text:`EVALÚA:\n ${ddd.representanteTecnico} \n REPRESENTANTE TÉCNICO`,alignment:'center',border:[true,false,true,true],fontSize:7},
                    {text:`FECHA \n ${day}/${month}/${year}`,alignment:'center',border:[true,false,true,true],fontSize:7}]
             ]
        },
    layout:{
      defaultBorder: false
    },
    margin:[3,0]
        }
    ]
 ,
  pageSize: 'LETTER',
  pageMargins: [22,150]

};
 this.pdfMaker.generate(dd,'sssss')

 }


}
