import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-resultados-riesgos',
  templateUrl: './resultados-riesgos.page.html',
  styleUrls: ['./resultados-riesgos.page.scss'],
})
export class ResultadosRiesgosPage implements OnInit {

  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  pdf(){
    console.log('hola mundo');
   //
   var dd = {
    header: function(){
      return {
          table: { widths: [560],heights:[45,0,0],
body: [

    [{text:''}],
    [{text:'II. IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN DE RIESGOS Y DE IMPACTOS AMBIENTALES',alignment:'center',bold:true}],
    [{text:'ERESULTADO DEL ANÁLISIS DE RIESGOS',alignment:'center',bold:true,fillColor:'#ddd'}],
   
]

}, margin: [22,15]
      };
    },
    footer: function(){
      return {
          table:{
   headerRows:1, 
   widths: [560],
             body : [
             [''],
             [''],
             ['']
                 ]
        }, layout : 'headerLineOnly',
          margin: [30,85]
      };
    },
    
    content:[{text:'\n'},
            {
                table:{
                    widths: [20,110,90,110,140,10,10,10],
                    body:[
                        [{text:'NO',bold:true,fillColor:'#ddd'},{text:'Falla',bold:true,fillColor:'#ddd'},{text:'Causas de Falla',bold:true,fillColor:'#ddd'},{text:'Consecuencias',bold:true,fillColor:'#ddd'},{text:'Medidas de Control',bold:true,fillColor:'#ddd'},{text:'F',bold:true,fillColor:'#ddd'},{text:'C',bold:true,fillColor:'#ddd'},{text:'R',bold:true,fillColor:'#ddd'},],
                        [{text:'1'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'2'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'3'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'4'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'5'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'6'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'7 '},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'8'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'9'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'10'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'11'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        [{text:'12'},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},{text:''},],                       
                        ]
                }
            },{
                text:'\nGLOSARIO: F: FRECUENCIA, C: CONSECUENCIA, R: RIESGO'
            },{text:'\n'},{
                table:{widths: [560],heights:[10,110],
                body:[
                    [{text:'CONCLUSIÓN Y RECOMENDACIONES',bold:true,fillColor:'#ddd'}],
                    [{text:''}]
                    ]    
                }
                
            },{text:'\n'},{
                table:{widths: [400,150],heights:[90],
                    body:[
                        [{text:'Revisado por:\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO'},{text:'FECHA DE APROBACIÓN:'}]
                        ]
                }
            }
         ]
   ,
    pageSize: 'LETTER',
    pageMargins: [22,120]
};

    this.pdfMaker.generate(dd, 'II.Resultados de analisis de riesgos.pdf');
    
    
  }
}
