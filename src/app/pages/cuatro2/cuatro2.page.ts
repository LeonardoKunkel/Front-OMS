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
    if(this.datos.C1===true && this.datos.C2===true && this.datos.C3===true ){
      console.log('Servicio exitoso');
    }else{
      alert('Debes seleccionar 3 ')
    }
    if(this.datos.C2===true && this.datos.C3===true && this.datos.C4===true ){
      console.log('Servicio exitoso');
    }else{
      alert('Debes seleccionar 3 ')
    }
    if(this.datos.C3===true && this.datos.C4===true && this.datos.C5===true ){
      console.log('Servicio exitoso');
    }else{
      alert('Debes seleccionar 3 ')
    }
    console.log(this.datos);
    
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
