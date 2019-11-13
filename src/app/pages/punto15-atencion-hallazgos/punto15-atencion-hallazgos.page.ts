import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto15-atencion-hallazgos',
  templateUrl: './punto15-atencion-hallazgos.page.html',
  styleUrls: ['./punto15-atencion-hallazgos.page.scss'],
})
export class Punto15AtencionHallazgosPage implements OnInit {
 datos:any={
    fechaInforme:'',
    descripcionHallazgo:'',
    analisisCausaHallazgo:'',
    accionCorrectiva:'',
    nombre:'',
    fechaCompromiso:'',
    recursosNecesarios:''
 }
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }
  enviarForm(formulario){
    console.log('Formulario enviado');
    console.log(this.datos);
    
  }

  pdf(){
    var dd = {
      header: function(){
         return {
               table: {widths: [500, 20, 200],
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
                    widths:[45,250,118,300], heights:[10],
                    body:[
                        [{text: 'ORIGEN', bold:true, fillColor: '#ddd',},{text: 'Programa de auditoría interna'},{text: 'FECHA DEL INFORME', bold:true, fillColor:'#ddd'},{text:`${this.datos.fechaInforme}`}],
                        ]
                        
                }
            },
            {
                table:{
                    widths:[135,60,70,448], heights:[10],
                    body:[
                        [{text: 'TIPO DE AUDITORÍA', bold:true, fillColor: '#ddd'},{text: 'SASISOPA'},{text: 'CRITERIO', bold:true, fillColor: '#ddd'},{text: 'DACG de la ASEA para implementación del SASISOPA (16/06/2016)'}]
                        ]
                }
            },
            {
                table:{
                    widths:[740,], heights:[10],
                    body:[
                        [{text: 'OBJETIVO DE LA AUDITORIA', bold:true, fillColor:'#ddd'}],
                        [{text: 'Conocer el avance de la implantación del SASISOPA en la Estación de Servicio.',}],
                        [{text: 'ALCANCE DE LA AUDITORIA', bold:true, fillColor:'#ddd'}],
                        [{text: 'A los procesos del SASISOPA de la estación de servicio',}]
                        ]
                }
            },
            {text:'\n'},
            {
                table:{
                    widths:[740,], heights:[10,60,10,60,10,60,10],
                    body:[
                        [{text: 'DESCRIPCIÓN DEL HALLAZGO', bold:true, fillColor:'#ddd'}],
                        [{text: `${this.datos.descripcionHallazgo}` ,alignment: 'justify'}],
                        [{text: 'ANÁLISIS DE LAS CAUSAS DEL HALLAZGO', bold:true, fillColor:'#ddd'}],
                        [{text: `${this.datos.analisisCausaHallazgo}` ,alignment: 'justify'}],
                        [{text: 'ACCIÓN CORRECTIVA', bold:true, fillColor: '#ddd'}],
                        [{text: `${this.datos.accionCorrectiva}` ,alignment: 'justify'}],
                        [{text: 'RESPONSABLE DE LA ATENCIÓN DE LOS HALLAZGOS', bold:true, fillColor: '#ddd'}]
                        ]
                }
            },
            {
                table:{
                    widths:[60,350,130,173], heights:[10],
                    body:[
                        [{text: 'NOMBRE', bold:true},{text:`${this.datos.nombre}`},{text: 'FECHA COMPROMISO', bold:true},{text:`${this.datos.fechaCompromiso}`}],
                        ]
                }
            },
            {
                table:{
                    widths:[740], heights:[10,70],
                    body:[
                        [{text: 'RECURSOS NECESARIOS PARA ATENDER EL HALLAZGO', bold:true, fillColor: '#ddd'}],
                        [{text:`${this.datos.recursosNecesarios}`}]
                        ]
                }
            },
            {text: '\n\n\n\n\n\n'},
            {
               table: {
                   widths: [241,241,241], heights: [50,],
                   body: [
                       [{text: 'PROPONE\n\nRoberto Muñoz Torres\nREPRESENTANTE TÉCNICO', bold:true, }, {text: 'APRUEBA\n\nFernando Bedoy\nMÁXIMA AUTORIDAD', bold:true,},{text: 'FECHA', bold:true,}]
                       ]
               }
            }
   ],
     pageOrientation: 'landscape',
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
 this.pdfMaker.generate(dd,'Evaluacion des aspectos ambientales');
  }

}
