import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-resultados-riesgos',
  templateUrl: './resultados-riesgos.page.html',
  styleUrls: ['./resultados-riesgos.page.scss'],
})
export class ResultadosRiesgosPage implements OnInit {
respuesta:any={};
datos:any={
  P1C1:'',
  P2C1:'',
  P3C1:'',
  P4C1:'',
  P5C1:'',
  P6C1:'',
  P7C1:'',
  P1C2:'',
  P2C2:'',
  P3C2:'',
  P4C2:'',
  P5C2:'',
  P6C2:'',
  P7C2:'',
  P1C3:'',
  P2C3:'',
  P3C3:'',
  P4C3:'',
  P5C3:'',
  P6C3:'',
  P7C3:'',
  P1C4:'',
  P2C4:'',
  P3C4:'',
  P4C4:'',
  P5C4:'',
  P6C4:'',
  P7C4:'',
  P1C5:'',
  P2C5:'',
  P3C5:'',
  P4C5:'',
  P5C5:'',
  P6C5:'',
  P7C5:'',
  P1C6:'',
  P2C6:'',
  P3C6:'',
  P4C6:'',
  P5C6:'',
  P6C6:'',
  P7C6:'',
  P1C7:'',
  P2C7:'',
  P3C7:'',
  P4C7:'',
  P5C7:'',
  P6C7:'',
  P7C7:'',
}
  constructor(private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

 enviarForm(formulario){
  console.log(this.datos);
  
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
                        [{text:'1'},{text:`${this.datos.P1C1}`,fontSize:8},{text:`${this.datos.P2C1}`,fontSize:8},{text:`${this.datos.P3C1}`,fontSize:8},{text:`${this.datos.P4C1}`,fontSize:8},{text:`${this.datos.P5C1}`,fontSize:8},{text:`${this.datos.P6C1}`,fontSize:8},{text:`${this.datos.P7C1}`,fontSize:8}],                       
                        [{text:'2'},{text:`${this.datos.P1C2}`,fontSize:8},{text:`${this.datos.P2C2}`,fontSize:8},{text:`${this.datos.P3C2}`,fontSize:8},{text:`${this.datos.P4C2}`,fontSize:8},{text:`${this.datos.P5C2}`,fontSize:8},{text:`${this.datos.P6C2}`,fontSize:8},{text:`${this.datos.P7C2}`,fontSize:8}],                       
                        [{text:'3'},{text:`${this.datos.P1C3}`,fontSize:8},{text:`${this.datos.P2C3}`,fontSize:8},{text:`${this.datos.P3C3}`,fontSize:8},{text:`${this.datos.P4C3}`,fontSize:8},{text:`${this.datos.P5C3}`,fontSize:8},{text:`${this.datos.P6C3}`,fontSize:8},{text:`${this.datos.P7C3}`,fontSize:8}],                       
                        [{text:'4'},{text:`${this.datos.P1C4}`,fontSize:8},{text:`${this.datos.P2C4}`,fontSize:8},{text:`${this.datos.P3C4}`,fontSize:8},{text:`${this.datos.P4C4}`,fontSize:8},{text:`${this.datos.P5C4}`,fontSize:8},{text:`${this.datos.P6C4}`,fontSize:8},{text:`${this.datos.P7C4}`,fontSize:8}],                       
                        [{text:'5'},{text:`${this.datos.P1C5}`,fontSize:8},{text:`${this.datos.P2C5}`,fontSize:8},{text:`${this.datos.P3C5}`,fontSize:8},{text:`${this.datos.P4C5}`,fontSize:8},{text:`${this.datos.P5C5}`,fontSize:8},{text:`${this.datos.P6C5}`,fontSize:8},{text:`${this.datos.P7C5}`,fontSize:8}],                       
                        [{text:'6'},{text:`${this.datos.P1C6}`,fontSize:8},{text:`${this.datos.P2C6}`,fontSize:8},{text:`${this.datos.P3C6}`,fontSize:8},{text:`${this.datos.P4C6}`,fontSize:8},{text:`${this.datos.P5C6}`,fontSize:8},{text:`${this.datos.P6C6}`,fontSize:8},{text:`${this.datos.P7C6}`,fontSize:8}],                       
                        [{text:'7'},{text:`${this.datos.P1C7}`,fontSize:8},{text:`${this.datos.P2C7}`,fontSize:8},{text:`${this.datos.P3C7}`,fontSize:8},{text:`${this.datos.P4C7}`,fontSize:8},{text:`${this.datos.P5C7}`,fontSize:8},{text:`${this.datos.P6C7}`,fontSize:8},{text:`${this.datos.P7C7}`,fontSize:8}],                       
                        [{text:'8'},{text:`${this.datos.P1C8}`,fontSize:8},{text:`${this.datos.P2C8}`,fontSize:8},{text:`${this.datos.P3C8}`,fontSize:8},{text:`${this.datos.P4C8}`,fontSize:8},{text:`${this.datos.P5C8}`,fontSize:8},{text:`${this.datos.P6C8}`,fontSize:8},{text:`${this.datos.P7C8}`,fontSize:8}],                       
                        [{text:'9'},{text:`${this.datos.P1C9}`,fontSize:8},{text:`${this.datos.P2C9}`,fontSize:8},{text:`${this.datos.P3C9}`,fontSize:8},{text:`${this.datos.P4C9}`,fontSize:8},{text:`${this.datos.P5C9}`,fontSize:8},{text:`${this.datos.P6C9}`,fontSize:8},{text:`${this.datos.P7C9}`,fontSize:8}],                       
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
