import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-trece-evaluacion',
  templateUrl: './punto-trece-evaluacion.page.html',
  styleUrls: ['./punto-trece-evaluacion.page.scss'],
})
export class PuntoTreceEvaluacionPage implements OnInit {
  datos:any={
    area:'',
    equipo:'',
    simulacro:'',
    aviso:'',
    agente:'',
    fecha:'',
    escenario:'',
    objetivo:'',
    conceptos:'',
    aciertos:'',
    observaciones:'',
    concluciones:'',
    propone:'',
    aprobado:'',
    autoriza:''

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
 
   content: [
       {
           table:{
               widths:[559], heights:[10],
               body:[
                   [{text: '1. INFORMACIÓN DEL SIMULACRO', bold: true, fillColor: '#ddd'}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           table:{
               widths:[250,300], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'}],
                   [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'}],
                   [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'}],
                   [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   [{text:'',colSpan: 2}],
                   ],
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   [{text:''},{text:''},{text:''}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:''}],
                   ],
           },
       },
       {text:'\n'},
       {
           table:{
               widths:[186,186,180], heights:[10,80],
               body:[
                   [{text:'5. AUTORIZACIÓN DEL SIMULACRO', bold:true, fillColor:'#ddd', colSpan:3}],
                   [{text:'PROPONE:',aligment:'center'},{text:'APROBADO POR:',aligment:'center'},{text:'AUTORIZA:',aligment:'center'}],
                   ],
           },
       },
       
   ],
   
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 }
    this.pdfMaker.generate(dd,'Evaluacion des aspectos ambientales');
  }

}
