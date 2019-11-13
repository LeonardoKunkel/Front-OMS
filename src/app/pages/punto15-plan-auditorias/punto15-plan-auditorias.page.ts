import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto15-plan-auditorias',
  templateUrl: './punto15-plan-auditorias.page.html',
  styleUrls: ['./punto15-plan-auditorias.page.scss'],
})
export class Punto15PlanAuditoriasPage implements OnInit {
  datos:any={
    fechaEjecucion:'',
    nombre:'',
    nombreAuditor:'',
    fechaApertura:'',
    fechaCierre:'',
    fechaHora1:'',
    elemento1:'',
    nombreAuditor1:'',
    observaciones1:'',
    fechaHora2:'',
    elemento2:'',
    nombreAuditor2:'',
    observaciones2:'',
    fechaHora3:'',
    elemento3:'',
    nombreAuditor3:'',
    observaciones3:'',
    fechaHora4:'',
    elemento4:'',
    nombreAuditor4:'',
    observaciones4:'',
    fechaHora5:'',
    elemento5:'',
    nombreAuditor5:'',
    observaciones5:'',
    fechaHora6:'',
    elemento6:'',
    nombreAuditor6:'',
    observaciones6:'',
    fechaHora7:'',
    elemento7:'',
    nombreAuditor7:'',
    observaciones7:'',
    fechaHora8:'',
    elemento8:'',
    nombreAuditor8:'',
    observaciones8:'',
    fechaHora9:'',
    elemento9:'',
    nombreAuditor9:'',
    observaciones9:'',
    fechaHora10:'',
    elemento10:'',
    nombreAuditor10:'',
    observaciones10:'',

  }
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  enviarForm(formulario){
    console.log(this.datos);
    
  }

  pdf(){
    var dd = {
      header: function(){
         return {
               table: {widths: [320, 20, 200],
               heights: [30,10,10],
           body: [
             [{text:'Gasolinera El carril S.A. de C.V.', fontSize:19,colSpan:3,bold:true},{},{}],
             [{text:'XV. Auditorías',colSpan:3, alignment: 'center', bold:true},{},{}],
             [{text:'PLAN DE ATENCIÓN DE HALLAZGOS',colSpan:3,alignment: 'center', bold:true, fillColor: '#ddd'},{},{}]
           ]
         }, margin: [22,20]
         };
       },
       footer: function(){
         
       },
 
   content: [{text:'\n'},
            {
                table:{
                    widths:[45,170,118,200], heights:[10],
                    body:[
                        [{text: 'ORIGEN', bold:true, fillColor: '#ddd',},{text: 'Programa de auditoría interna'},{text: 'FECHA DE EJECUCIÓN', bold:true, fillColor:'#ddd'},{text:`${this.datos.fechaEjecucion}`}],
                        ]
                        
                }
            },
            {
                table:{
                    widths:[109,42,55,327], heights:[10],
                    body:[
                        [{text: 'TIPO DE AUDITORÍA', bold:true, fillColor: '#ddd'},{text: 'SISOPA'},{text: 'CRITERIO', bold:true, fillColor: '#ddd'},{text: 'DACG de la ASEA para implementación del SASISOPA'}]
                        ]
                }
            },
            {
                table:{
                    widths:[560,], heights:[10],
                    body:[
                        [{text: 'OBJETIVO DE LA AUDITORIA', bold:true, fillColor:'#ddd'}],
                        [{text: 'Conocer el avance de la implantación del SASISOPA en la Estación de Servicio.',}],
                        [{text: 'ALCANCE DE LA AUDITORIA', bold:true, fillColor:'#ddd'}],
                        [{text: 'A los procesos del SASISOPA de la estación de servicio',}]
                        ]
                }
            },
            {
                table:{
                    widths:[90,191,60,192], heights:[10],
                    body:[
                        [{text: 'AUDITOR LÍDER', bold:true, fillColor:'#ddd'},{text:`${this.datos.nombre}`},{text: 'AUDITOR 1', bold:true, fillColor:'#ddd'},{text:`${this.datos.nombreAuditor}`}],
                        ]
                }
            },
            {
                table:{
                    widths:[165,112,145,111], heights:[10],
                    body:[
                        [{text: 'FECHA Y HORA DE APERTURA', bold:true, fillColor:'#ddd'},{text: `${this.datos.fechaApertura}`},{text: 'FECHA Y HORA DE CIERRE', bold:true, fillColor:'#ddd'},{text:`${this.datos.fechaCierre}`}],
                        ]
                }
            },
            {
                table:{
                    widths:[50,300,88,95], heights:[10,25,25,25,25,25,25,25,25,25,25],
                    body:[
                        [{text: 'FECHA Y HORA', bold:true, fillColor:'#ddd'},{text: 'ELEMENTO DE SISTEMA DE ADMINISTRACIÓN', alignment: 'center', bold:true, fillColor:'#ddd'},{text: 'AUDITOR', alignment: 'center', bold:true, fillColor:'#ddd'},{text: 'OBSERVACIONES', bold:true, fillColor:'#ddd'}],
                        [{text:`${this.datos.fechaHora1}`},{text:`${this.datos.elemento1}`},{text:`${this.datos.nombreAuditor1}`},{text:`${this.datos.observaciones1}`}],
                        [{text:`${this.datos.fechaHora2}`},{text:`${this.datos.elemento2}`},{text:`${this.datos.nombreAuditor2}`},{text:`${this.datos.observaciones2}`}],
                        [{text:`${this.datos.fechaHora3}`},{text:`${this.datos.elemento3}`},{text:`${this.datos.nombreAuditor3}`},{text:`${this.datos.observaciones3}`}],
                        [{text:`${this.datos.fechaHora4}`},{text:`${this.datos.elemento4}`},{text:`${this.datos.nombreAuditor4}`},{text:`${this.datos.observaciones4}`}],
                        [{text:`${this.datos.fechaHora5}`},{text:`${this.datos.elemento5}`},{text:`${this.datos.nombreAuditor5}`},{text:`${this.datos.observaciones5}`}],
                        [{text:`${this.datos.fechaHora6}`},{text:`${this.datos.elemento6}`},{text:`${this.datos.nombreAuditor6}`},{text:`${this.datos.observaciones6}`}],
                        [{text:`${this.datos.fechaHora7}`},{text:`${this.datos.elemento7}`},{text:`${this.datos.nombreAuditor7}`},{text:`${this.datos.observaciones7}`}],
                        [{text:`${this.datos.fechaHora8}`},{text:`${this.datos.elemento8}`},{text:`${this.datos.nombreAuditor8}`},{text:`${this.datos.observaciones8}`}],
                        [{text:`${this.datos.fechaHora9}`},{text:`${this.datos.elemento9}`},{text:`${this.datos.nombreAuditor9}`},{text:`${this.datos.observaciones9}`}],
                        [{text:`${this.datos.fechaHora10}`},{text:`${this.datos.elemento10}`},{text:`${this.datos.nombreAuditor10}`},{text:`${this.datos.observaciones10}`}],
                        ]
                }
            },
            {text: '\n\n'},
            {
                table:{
                    widths:[560], heights:[10,60,10,60],
                    body:[
                        [{text: 'ASIGNACIÓN DE RECURSOS', bold:true, fillColor: '#ddd'}],
                        [{text: ''}],
                        [{text: 'PERSONAL QUE PARTICIPA EN LA AUDITORÍA', bold:true, fillColor: '#ddd'}],
                        [{text: ''}],
                        ]
                }
            },
            {text: '\n\n\n\n\n'},
            {
               table: {
                   widths: [221,221,100], heights: [50,],
                   body: [
                       [{text: 'PROPONE\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO', bold:true, }, {text: 'APRUEBA\n\nFernando Bedoy\nMÁXIMA AUTORIDAD', bold:true,},{text: 'FECHA DE APROBACIÓN', bold:true,}]
                       ]
               }
            }
   ],
     
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
 
 this.pdfMaker.generate(dd,'Plan de auditorias');
  }
 
}
