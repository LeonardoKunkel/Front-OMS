import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-trece-evaluacion',
  templateUrl: './punto-trece-evaluacion.page.html',
  styleUrls: ['./punto-trece-evaluacion.page.scss'],
})
export class PuntoTreceEvaluacionPage implements OnInit {

  datos:any = {
    texto1:'',
    texto2:'',
    texto3:'',
    texto4:'',
    texto5:'',
    texto6:'',
    texto7:'',
    texto8:'',
    texto9:'',
    texto10:'',
    texto11:'',
    texto12:'',
    texto13:'',
    texto14:'',
    fecha1:'',
  }

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm (formulario) {
    console.log(this.datos);
  }

  pdf() {
    console.log('documento descargado');
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
              widths:[80,150,100,200], heights:[10,10,10,10,60],
              body:[
                  [{text:'ÁREA:', bold: true, fillColor: '#ddd'},{text:`${this.datos.texto1}`,fontSize:7},{text:'FECHA Y HORA PROGRAMADA:', bold: true, fillColor:'#ddd'},{text:`${this.datos.fecha1}`,fontSize:7}],
                  [{text:'EQUIPO:', bold: true, fillColor:'#ddd'},{text:`${this.datos.texto2}`,fontSize:7},{text:'CON AVISO PREVIO:', bold: true, fillColor:'#ddd'},{text:`${this.datos.texto4}`,fontSize:7}],
                  [{text:'CLASE DE SIMULACRO:', bold: true, fillColor:'#ddd'},{text:`${this.datos.texto3}`,fontSize:7},{text:'AGENTE PERTURBADOR:', bold: true, fillColor:'#ddd'},{text:`${this.datos.texto5}`,fontSize:7}],
                  [{text:'DESCRIPCIÓN DEL ESCENARIO DE EMERGENCIA:',bold: true, fillColor:'#ddd', colSpan: 4},],
                  [{text:`${this.datos.texto6}`,fontSize:7,colSpan: 4}]
                  ],  
                   
           },
       },
       {text:'\n\n'},
       {
           table:{
               widths:[70,200,270], heights:[10,10,50],
               body:[
                   [{text:'EVALUACIÓN', bold: true, fillColor:'#ddd', colSpan: 3},{text:''},{text:''}],
                   [{text:'OBJETIVO', bold: true, fillColor:'#ddd', aligment:'center'},{text:'CONCEPTOS EVALUADOS', bold:true, fillColor:'#ddd', aligment:'center'},{text:'ACIERTOS Y DEFICIENCIAS OBSERVADAS', bold: true, fillColor:'#ddd', aligment:'center'}],
                   [{text:`${this.datos.texto7}`,fontSize:7},{text:`${this.datos.texto8}`,fontSize:7},{text:`${this.datos.texto9}`,fontSize:7}],
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'3. OBSERVACIONES', bold: true, fillColor:'#ddd'}],
                   [{text:`${this.datos.texto10}`,fontSize:7}]
                   ]
           }
       },
       {text:'\n'},
       {
           table:{
               widths:[559], heights:[10,70],
               body:[
                   [{text:'4. CONCLUSIONES', bold: true, fillColor:'#ddd'}],
                   [{text:`${this.datos.texto11}`,fontSize:7}],
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
}

}
