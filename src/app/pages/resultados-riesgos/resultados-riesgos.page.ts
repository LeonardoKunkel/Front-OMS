import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-resultados-riesgos',
  templateUrl: './resultados-riesgos.page.html',
  styleUrls: ['./resultados-riesgos.page.scss'],
})
export class ResultadosRiesgosPage implements OnInit {
respuesta:any={};
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  enviarForm(formulario){
    console.log('Enviado');
    var p1c1 = formulario.value.p1c1;
    var p2c1 = formulario.value.p2c1;
    var p3c1 = formulario.value.p3c1;
    var p4c1 = formulario.value.p4c1;
    var p5c1 = formulario.value.p5c1;
    var p6c1 = formulario.value.p6c1;
    var p7c1 = formulario.value.p7c1;
    
    var p1c2 = formulario.value.p1c2;
    var p2c2 = formulario.value.p2c2;
    var p3c2 = formulario.value.p3c2;
    var p4c2 = formulario.value.p4c2;
    var p5c2 = formulario.value.p5c2;
    var p6c2 = formulario.value.p6c2;
    var p7c2 = formulario.value.p7c2;
    
    var p1c3 = formulario.value.p1c3;
    var p2c3 = formulario.value.p2c3;
    var p3c3 = formulario.value.p3c3;
    var p4c3 = formulario.value.p4c3;
    var p5c3 = formulario.value.p5c3;
    var p6c3 = formulario.value.p6c3;
    var p7c3 = formulario.value.p7c3;
    
    var p1c4 = formulario.value.p1c4;
    var p2c4 = formulario.value.p2c4;
    var p3c4 = formulario.value.p3c4;
    var p4c4 = formulario.value.p4c4;
    var p5c4 = formulario.value.p5c4;
    var p6c4 = formulario.value.p6c4;
    var p7c4 = formulario.value.p7c4;
    
    var p1c5 = formulario.value.p1c5;
    var p2c5 = formulario.value.p2c5;
    var p3c5 = formulario.value.p3c5;
    var p4c5 = formulario.value.p4c5;
    var p5c5 = formulario.value.p5c5;
    var p6c5 = formulario.value.p6c5;
    var p7c5 = formulario.value.p7c5;
    
    var p1c6 = formulario.value.p1c6;
    var p2c6 = formulario.value.p2c6;
    var p3c6 = formulario.value.p3c6;
    var p4c6 = formulario.value.p4c6;
    var p5c6 = formulario.value.p5c6;
    var p6c6 = formulario.value.p6c6;
    var p7c6 = formulario.value.p7c6;
    
    var p1c7 = formulario.value.p1c7;
    var p2c7 = formulario.value.p2c7;
    var p3c7 = formulario.value.p3c7;
    var p4c7 = formulario.value.p4c7;
    var p5c7 = formulario.value.p5c7;
    var p6c7 = formulario.value.p6c7;
    var p7c7 = formulario.value.p7c7;
    
    var p1c8 = formulario.value.p1c8;
    var p2c8 = formulario.value.p2c8;
    var p3c8 = formulario.value.p3c8;
    var p4c8 = formulario.value.p4c8;
    var p5c8 = formulario.value.p5c8;
    var p6c8 = formulario.value.p6c8;
    var p7c8 = formulario.value.p7c8;

    var p1c9 = formulario.value.p1c9;
    var p2c9 = formulario.value.p2c9;
    var p3c9 = formulario.value.p3c9;
    var p4c9 = formulario.value.p4c9;
    var p5c9 = formulario.value.p5c9;
    var p6c9 = formulario.value.p6c9;
    var p7c9 = formulario.value.p7c9;

    this.respuesta={
      p1c1,p2c1,p3c1,p4c1,p5c1,p6c1,p7c1,
      p1c2,p2c2,p3c2,p4c2,p5c2,p6c2,p7c2,
      p1c3,p2c3,p3c3,p4c3,p5c3,p6c3,p7c3,
      p1c4,p2c4,p3c4,p4c4,p5c4,p6c4,p7c4,
      p1c5,p2c5,p3c5,p4c5,p5c5,p6c5,p7c5,
      p1c6,p2c6,p3c6,p4c6,p5c6,p6c6,p7c6,
      p1c7,p2c7,p3c7,p4c7,p5c7,p6c7,p7c7,
      p1c8,p2c8,p3c8,p4c8,p5c8,p6c8,p7c8,
      p1c9,p2c9,p3c9,p4c9,p5c9,p6c9,p7c9,
    }
    console.log(this.respuesta);
    
    
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
