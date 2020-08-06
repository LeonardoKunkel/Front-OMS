import { Component, OnInit } from '@angular/core';
import { DirectorServiceService } from '../../services/Elemento 6/director-service.service';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { EstacionServicioDatosService } from 'src/app/services/estacion-servicio-datos.service';
import { Observable } from 'rxjs';
import { FirmaEstacionServiceService } from 'src/app/services/firma-estacion-service.service';
import { MarcaAguaServiceService } from 'src/app/services/marca-agua-service.service';
import { IconoEstacionService } from 'src/app/services/iconosEstacion.service';
import { FirmaRepresentanteService } from 'src/app/services/firma-representante.service';

@Component({
  selector: 'app-punto-quince-programa',
  templateUrl: './punto-quince-programa.page.html',
  styleUrls: ['./punto-quince-programa.page.scss'],
})
export class PuntoQuinceProgramaPage implements OnInit {
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
  datos: any = {
    requerimientosFisicos: '',
    herramientasEquipos: '',
    equipoProteccion: '',
    nivelAcademico: '',
    personalCargo: ''
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
    private firmaRepresente : FirmaRepresentanteService,
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
      image: `${marcaAgua}`,
      width: 300,
      height: 370, 
      absolutePosition: {x: 250, y: 140},opacity: 0.5}
},///////////////////////////////////////////////////////
header: function(){
  return {
    table:{
        widths: [150,570],
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
                    text:`${ddd.nombreEstacionServicio}`,bold:true,fontSize:25,alignment: 'rigth', margin:[15,20],
                border:[false,true,true,true],
                }
            ],[
                {
                    text:'PROGRAMA DE AUDITORÍAS',fontSize:9,alignment: 'center',colSpan:2,border:[true,true,true,true],
                },{
                    
                }
                ],[
                    {
                      text:'XV. AUDITORIAS',bold:true,alignment: 'center',colSpan:2,fillColor:'#eeeeee',border:[true,true,true,true],
                    },{
                        
                    }
                    ]
          ]
    },margin: [22,7],
    
      layout:{
        defaultBorder: false
      }
  };
},
footer: function(currentPage, pageCount){
  return {
      table:{
    headerRows:1, 
    widths: [650],
         body : [
         [{columns:[
             'Página' + currentPage.toString() + ' de ' + pageCount,
             {text:`P-SA-01 Rev.0, ${day}/${month}/${year}`,width: 180}
             ]}],
         [{
          image: `${footer}`,
          pageBreak: 'after',
          width: 650,
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
          widths:[160,250,10,250,10],
          body:[
              [
                  {text:`TIPO DE AUDITORÍA`,bold:true,fontSize:10,fillColor:'#a5c3dd',alignment:'center'},
                  {text:`INTERNA`,bold:true,fontSize:10,fillColor:'#a5c3dd',alignment:'right'},
                  {text:``,bold:true,fontSize:10},
                  {text:`INTERNA`,bold:true,fontSize:10,fillColor:'#a5c3dd',alignment:'right'},
                  {text:``,bold:true,fontSize:10},
                  
             ],[
                  {text:`AREA`,bold:true,fontSize:10,fillColor:'#a5c3dd'},{text:`SASISOPA`,colSpan:4},{},{},{} 
             ]
              ]
      }
  },{
    text:'\n\n'  
  },{
    table:{ 
        widths:[200,190,150,20,20,20,20,20,20],
        body:[
            [
                {text:`ELEMENTO DEL SISTEMA`,bold:true,fontSize:10,fillColor:'#a5c3dd',rowSpan:2,alignment:'center'},
                {text:`OBJETIVO`,bold:true,fontSize:10,fillColor:'#a5c3dd',rowSpan:2,alignment:'center'},
                {text:`ALCANCE`,bold:true,fontSize:10,fillColor:'#a5c3dd',rowSpan:2,alignment:'center'},
                {text:`{2020}`,bold:true,fontSize:10,fillColor:'#a5c3dd',colSpan:2,alignment:'center'},
                {text:``,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`{2021}`,bold:true,fontSize:10,fillColor:'#a5c3dd',colSpan:2,alignment:'center'},
                {text:``,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`{2022}`,bold:true,fontSize:10,fillColor:'#a5c3dd',colSpan:2,alignment:'center'},
                {text:``,bold:true,fontSize:10,fillColor:'#a5c3dd'},
            ],[
                {text:``,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:``,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:``,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`JUN`,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`DIC`,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`JUN`,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`DIC`,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`JUN`,bold:true,fontSize:10,fillColor:'#a5c3dd'},
                {text:`DIC`,bold:true,fontSize:10,fillColor:'#a5c3dd'},
             ],[
                {text:`POLÍTICA`,fontSize:9,alignment:'justify'},
                {text:`• Revisión de la política\n• Comunicación`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`IDENTIFICACION DE ASPECTOS AMBIENTALES Y DE RIESGOS`,fontSize:9,alignment:'justify'},
                {text:`• Identificar y evaluar aspectos ambientales y peligros de las actividades`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`REQUISITOS LEGALES`,fontSize:9,alignment:'justify'},
                {text:`• Identificar y monitorear actualizaciones y nuevas Leyes, NOMS, DACGS, Resoluciones que le apliquen a las  instalaciones`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`OBJETIVOS, METAS E INDICADORES`,fontSize:9,alignment:'justify'},
                {text:`• Revisar objetivos, metas e indicadores mediante la revisión de resultados`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`FUNCIONES, RESPONSABILIDAD Y AUTORIDAD`,fontSize:9,alignment:'justify'},
                {text:`• Designar a representante técnico \n• Establecer matriz de responsabilidades`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO`,fontSize:9,alignment:'justify'},
                {text:`• Desarrollar perfil de puestos\n• Detectar necesidades de capacitación\n• Elaborar e implementar programa de capacitación\n• Evaluar capacitación`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`OBJETIVOS, METAS E INDICADORES `,fontSize:9,alignment:'justify'},
                {text:`• Revisar objetivos, metas e indicadores mediante la revisión de resultados`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`FUNCIONES, RESPONSABILIDAD Y AUTORIDAD`,fontSize:9,alignment:'justify'},
                {text:`• Designar a representante técnico \n• Establecer matriz de responsabilidades`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO`,fontSize:9,alignment:'justify'},
                {text:`• Desarrollar perfil de puestos\n• Detectar necesidades de capacitación\n• Elaborar e implementar programa de capacitación\n• Evaluar capacitación`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`COMUNICACION, PARTICIPACION Y CONSULTA`,fontSize:9,alignment:'justify'},
                {text:`• Respuesta y seguimiento a quejas y sugerencias\n• Comunicación de todos los demás elementos`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`CONTROL DE DOCUMENTOS Y REGISTROS`,fontSize:9,alignment:'justify'},
                {text:`• Control y cambio de documentos y registros`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`MEJORES PRÁCTICAS Y ESTÁNDARES`,fontSize:9,alignment:'justify'},
                {text:`• Actualizar lista de códigos y estándares`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`CONTROL DE ACTIVIDADES Y PROCESOS`,fontSize:9,alignment:'justify'},
                {text:`• Contar con los procedimientos de operación y mantenimiento`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`INTEGRIDAD MECANICA`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:`• Actualizar lista de equipos críticos\n• Generar evidencias de cumplimiento al programa de mantenimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`SEGURIDAD DE CONTRATISTAS`,fontSize:9,alignment:'justify'},
                {text:`• Establecer reglas y comunican de seguridad para contratistas`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`PREPARACION Y RESPUESTA A EMERGENCIAS`,fontSize:9,alignment:'justify'},
                {text:`• Evaluar simulacros`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`MONITOREO VERIFICACION Y EVALUACION`,fontSize:9,alignment:'justify'},
                {text:`• Monitorear objetivos y metas`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES`,fontSize:9,alignment:'justify'},
                {text:`• Seguimiento a acciones preventivas y correctivas (en caso de un accidente)`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`REVISIÓN DE LA DIRECCIÓN `,fontSize:9,alignment:'justify'},
                {text:`• Realizar informe de resultados`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ],[
                {text:`INFORMES DE DESEMPEÑO`,fontSize:9,alignment:'justify'},
                {text:`• Realizar informe de desempeño (Si aplica)`,fontSize:9,alignment:'justify'},
                {text:`Lo contenido en el procedimiento`,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
                {text:``,fontSize:9,alignment:'justify'},
             ]
            ]
    }  
  },
  {text:'\n'},{
       table: {
           widths: [260,260,100],
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
pageMargins: [22,150],
  pageOrientation: 'landscape',

};
 this.pdfMaker.generate(dd,'jdjdjd')
}

}
