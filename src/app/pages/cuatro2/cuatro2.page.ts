import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';


@Component({
  selector: 'app-cuatro2',
  templateUrl: './cuatro2.page.html',
  styleUrls: ['./cuatro2.page.scss'],
})
export class Cuatro2Page implements OnInit {
  datos:any={
 C1:false,
 C2:false,
 C3:false,
 C4:false,
 C5:false,
 C6:false,
 C7:false,
 C8:false,
  }
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {  
  
  }

  enviarForm(formulario){
    var check1 = this.datos.C1?'Reducción en la generacion de residuos peligrosos':' ';
    var check2 = this.datos.c2?'Reducción en el consumo de agua':' ';
    var check3 = this.datos.C3?'Reducción en el cosumo de energía eléctrica':' ';
    var check4 = this.datos.C4?'Cumplimiento al programa de mantenimiento': ' ';
    var check5 = this.datos.C5?'Mejorar todas las actividades de simulacros': ' ';
    var check6 = this.datos.C6?'Incrementar las capacitaciones a los trabajadores': ' ';
    var check7 = this.datos.C7?'Mejorar el servicio de atencion al cliente': ' ';
    var check8 = this.datos.C5?'Incrementar la venta un 10% anualmente': ' ';

    if(this.datos.C1 === true && this.datos.C2 === true){
      alert('C1,C2')
    }else if(this.datos.C1 === true && this.datos.C3 === true){
      alert('C1,3')
    }else if(this.datos.C1 === true && this.datos.C4 === true){
      alert('c1,4')
    }else if(this.datos.C1 === true && this.datos.C4 === true){
      alert('c1,4')
    }else if(this.datos.C1 === true && this.datos.C5 === true){
      alert('c1,5')
    }else if(this.datos.C1 === true && this.datos.C6 === true){
      alert('c1,6')
    }else if(this.datos.C1 === true && this.datos.C7 === true){
      alert('c1,7')
    }else if(this.datos.C1 === true && this.datos.C8 === true){
      alert('c1,8')
    }else if(this.datos.C2 === true && this.datos.C3 === true){
      alert('c2,3')
    }else if(this.datos.C2 === true && this.datos.C4 === true){
      alert('c2,4')
    }else if(this.datos.C2 === true && this.datos.C5 === true){
      alert('c2,5')
    }else if(this.datos.C2 === true && this.datos.C6 === true){
      alert('c2,6')
    }else if(this.datos.C2 === true && this.datos.C7 === true){
      alert('c2,7')
    }else if(this.datos.C2 === true && this.datos.C8 === true){
      alert('c2,8')
    }else if(this.datos.C4 === true && this.datos.C3 === true){
      alert('c3,4')
    }else if(this.datos.C3 === true && this.datos.C5 === true){
      alert('c3,5')
    }else if(this.datos.C3 === true && this.datos.C6 === true){
      alert('C3,6')
    }else if(this.datos.C3 === true && this.datos.C7 === true){
      alert('C3,7')
    }else if(this.datos.C3 === true && this.datos.C8 === true){
      alert('C3,8')
    }else if(this.datos.C4 === true && this.datos.C5 === true){
      alert('C4.5')
    }else if(this.datos.C4 === true && this.datos.C6 === true){
      alert('C4.6')
    }else if(this.datos.C4 === true && this.datos.C7 === true ){
      alert('C4.7')
    }else if(this.datos.C4 === true && this.datos.C8 === true ){
      alert('C4,8')
    }else if(this.datos.C5 === true && this.datos.C6 === true){
      alert('C5.6')
    }else if(this.datos.C5 === true && this.datos.C7 === true){
      alert('C5.7')
    }else if(this.datos.C5 === true && this.datos.C8 === true){
      alert('C5,8')
    }else if(this.datos.C6 === true && this.datos.C7 === true){
      alert('C6.7')
    }else if(this.datos.C6 === true && this.datos.C8 === true){
      alert('C6,8')
    }else if(this.datos.C7 === true && this.datos.C8 === true){
      alert('C7,8')      
    }
  }

  pdf(){
    // playground requires you to assign document definition to a variable called dd

var dd = {
  header: function(){
    return {
        table: { widths: [565],heights:[50,15,15],
body: [

  [{text:''}],
  [{text:'IV. OBJETIVOS, METAS E INDICADORES',alignment:'center',bold:true}],
  [{text:'OBJETIVOS, METAS E INDICADORES',alignment:'center',bold:true}],
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
        margin: [70,90]
    };
  },
  
  content:[
      {
          table:{
              widths: [90,350,50,50],
              body:[
                  [{text:'OBJETIVO 1',fontSize:9,	fillColor: '#dddddd'},{text:`${this.datos.objetivo}`,colSpan:3},{},{}],
                  [{text:'PROCESO',fontSize:9,	fillColor: '#dddddd'},{text:`${this.datos.proceso}`,colSpan:3},{text:''},{}],
                  [{text:'RESPONSABLE',fontSize:9,	fillColor: '#dddddd'},{text:`REPRESENTANTE TÉCNICO: ${this.datos.objetivo}`,fontSize:9},{text:'PERIODO',fontSize:9,	fillColor: '#dddddd'},{text:`${this.datos.periodo}`}]
                  ]
          }
      },
      {text:'\n'},
      {
          table:{
              widths: [16,120,120,55,55,74,74],
              heights:[10,25,25,25],
              body:[
                    
                  [{text:'No.',fontSize:9,fillColor: '#dddddd',alignment:'center',bold:true},{text:'METAS',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'ACTIVIDAD',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'INDICADOR',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'SOPORTE',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'FRECUENCIA DE EVALUACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'CRITERIO DE ACEPTACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true}],
                  [{text:'1'},{text:`${this.datos.meta1}`},{text:`${this.datos.actividad1}`},{text:`${this.datos.indicador1}`},{text:`${this.datos.soporte1}`},{text:`${this.datos.frecuencia1}`},{text:`${this.datos.criterio1}`}],
                  [{text:'2'},{text:`${this.datos.meta2}`},{text:`${this.datos.actividad2}`},{text:`${this.datos.indicador2}`},{text:`${this.datos.soporte2}`},{text:`${this.datos.frecuencia2}`},{text:`${this.datos.criterio2}`}],
                  [{text:'3'},{text:`${this.datos.meta3}`},{text:`${this.datos.actividad3}`},{text:`${this.datos.indicador3}`},{text:`${this.datos.soporte3}`},{text:`${this.datos.frecuencia3}`},{text:`${this.datos.criterio3}`}],
                  ]
          }
          
          
      },
      {text:'\n'},
      {
          table:{
              widths: [90,350,50,50],
              body:[
                  [{text:'OBJETIVO 1',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{},{}],
                  [{text:'PROCESO',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{text:''},{}],
                  [{text:'RESPONSABLE',fontSize:9,	fillColor: '#dddddd'},{text:'REPRESENTANTE TÉCNICO:',fontSize:9},{text:'PERIODO',fontSize:9,	fillColor: '#dddddd'},{}]
                  ]
          }
      },
      {text:'\n'},
      {
          table:{
              widths: [16,120,120,55,55,74,74],
              heights:[10,25,25,25],
              body:[
                    
                  [{text:'No.',fontSize:9,fillColor: '#dddddd',alignment:'center',bold:true},{text:'METAS',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'ACTIVIDAD',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'INDICADOR',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'SOPORTE',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'FRECUENCIA DE EVALUACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'CRITERIO DE ACEPTACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true}],
                  [{text:'1'},{},{},{},{},{},{}],
                  [{text:'2'},{},{},{},{},{},{}],
                  [{text:'3'},{},{},{},{},{},{}] 
                  ]
          }
          
          
      },{text:'\n'},
      {
          table:{
               widths: [182,182,182],
               heights:[10,80],
              body:[
                  [{text:'REVISADO POR:',fontSize:9,	fillColor: '#dddddd',alignment:'center'},{text:'APROBADO POR:',fontSize:9,	fillColor: '#dddddd',alignment:'center'},{text:'FECHA DE APROBACIÓN:',fontSize:9,	fillColor: '#dddddd',alignment:'center'}],
                  [{text:'\n\n\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO'},{text:'\n\n\n\nFernando Bedoy Ruiz \nMAXIMA AUTORIDAD'},{text:'\n\n\n\n\nFECHA DE APROBACIÓN:'}]
                  ]
          }
      }
      
      ]
 ,
  pageSize: 'LETTER',
  pageMargins: [22,130]
};

this.pdfMaker.generate(dd, 'Objetivos,Etas e Indicadores');
  }

}
