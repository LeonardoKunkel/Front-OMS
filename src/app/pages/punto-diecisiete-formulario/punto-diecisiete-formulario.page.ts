import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-diecisiete-formulario',
  templateUrl: './punto-diecisiete-formulario.page.html',
  styleUrls: ['./punto-diecisiete-formulario.page.scss'],
})
export class PuntoDiecisieteFormularioPage implements OnInit {

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
    texto15:'',
    texto16:'',
    texto17:'',
    texto18:'',
    texto19:'',
    texto20:'',
    texto21:'',
    texto22:'',
    texto23:'',
    texto24:'',
    texto25:'',
    texto26:'',
    texto27:'',
    texto28:'',
    texto29:'',
    texto30:'',
    texto31:'',
    texto32:'',
    texto33:'',
    texto34:'',
    texto35:'',
    texto36:'',
    texto37:'',
    texto38:'',
    texto39:'',
    texto40:'',
    texto41:'',
    texto42:'',
    texto43:'',
    texto44:'',
    texto45:'',
    texto46:'',
    texto47:'',
    texto48:'',
    texto49:'',
    texto50:'',
    texto51:'',
    texto52:'',
    texto53:'',
    texto54:'',
    texto55:'',
    texto56:'',
    texto57:'',
    texto58:'',
    texto59:'',
    texto60:'',
    texto61:'',
    texto62:'',
    texto63:'',
    texto64:'',
    texto65:'',
    texto66:'',
    texto67:'',
    texto68:'',
    texto69:'',
    texto70:'',
    texto71:'',
    texto72:'',
    texto73:'',
    texto74:'',
    texto75:'',
    check1:'',
    check2:'',
    check3:'',
    check4:'',
    check5:'',
    check6:'',
    check7:'',
    check8:'',
    check9:'',
    check10:'',
    check11:'',
    check12:'',
    check13:'',
    check14:'',
    check15:'',
    check16:'',
    check17:'',
    check18:'',
    check19:'',
    check20:'',
    check21:'',
    check22:'',
    check23:'',
    check24:'',
    check25:'',
    check26:'',
    check27:'',
    check28:'',
    check29:'',
    check30:'',
    check31:'',
    fecha1:'',
    fecha2:'',
    fecha3:'',
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
               widths:[57,493], heights:[10,10,10],
               body:[
                   [{text: 'FECHA', bold:true, fillColor: '#ddd'}, {text:`${this.datos.hora1}`,fontSize:7}],
                   [{text: 'HORA', bold:true, fillColor: '#ddd'}, {text:`${this.datos.fecha1}`,fontSize:7}],
                   [{text: 'OBJETIVO', bold:true, fillColor: '#ddd'}, {text:`${this.datos.texto1}`,fontSize:7}]
                   ]
            }
       },
       {
           table:{
               widths:[559], heights:[10,100],
               body:[
                   [{text: 'ELEMENTOS DE ENTRADA', bold:true, fillColor: '#ddd'}],
                   [{
                       ol:[
                           'Resultados de la medición de indicadores de Desempeño de SISOPA.',
                           'Evaluación de requisitos legales.',
                           'Cumplimiento de metas y objetivos',
                           'Seguimiento de hallazgos y recomendaciones de mejora',
                           'Auditorías',
                           'Las comunicaciones con las partes interesadas externas, incluyendo quejas y sugerencias.',
                           'Los cambios en las circunstancias, incluyendo las actualizaciones del marco normativo aplicable',
                           'Recomendaciones de Incidentes y accidentes.'
                           ]
                   }],
                   
                   ]
           },
       },
       {text: '\n\n'},
       {
           text: '1. Resultado de indicadores de desempeño',
       style: 'header'
       },
       {text: '\n\n'},
       {
           table:{
               widths:[50,50,50,50,50,50], heights:[10,10,],
               body:[
                   [{text: 'No.', bold:true, fillColor: '#ddd'},{text: 'INDICADOR', bold:true, fillColor: '#ddd'},{text: 'Siglas', bold:true, fillColor: '#ddd'},{text: 'Resultado Anterior (%)', bold:true, fillColor: '#ddd'},{text: 'Meta 2020(%)', bold:true, fillColor: '#ddd'},{text: 'Indicador (%)', bold:true, fillColor: '#ddd'}],
                   [{text: '1'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto2}`,fontSize:7},{text:'0'},{text:`${this.datos.texto3}`,fontSize:7}],
                   [{text: '2'},{text: 'ÍNDICE DE GRAVEDAD'},{text: 'I.F.'},{text:`${this.datos.texto75}`,fontSize:7},{text:'0'},{text:`${this.datos.texto4}`,fontSize:7}],
                   [{text: '3'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto5}`,fontSize:7},{text:'0'},{text:`${this.datos.texto6}`,fontSize:7}],
                   [{text: '4'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto7}`,fontSize:7},{text:'0'},{text:`${this.datos.texto8}`,fontSize:7}],
                   [{text: '5'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto9}`,fontSize:7},{text:'0'},{text:`${this.datos.texto10}`,fontSize:7}],
                   [{text: '6'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto11}`,fontSize:7},{text:'0'},{text:`${this.datos.texto12}`,fontSize:7}],
                   [{text: '7'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto13}`,fontSize:7},{text:'0'},{text:`${this.datos.texto14}`,fontSize:7}],
                   [{text: '8'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto15}`,fontSize:7},{text:'0'},{text:`${this.datos.texto16}`,fontSize:7}],
                   [{text: '9'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto17}`,fontSize:7},{text:'0'},{text:`${this.datos.texto18}`,fontSize:7}],
                   [{text: '10'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto19}`,fontSize:7},{text:'0'},{text:`${this.datos.texto20}`,fontSize:7}],
                   [{text: '11'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto21}`,fontSize:7},{text:'0'},{text:`${this.datos.texto22}`,fontSize:7}],
                   [{text: '12'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto23}`,fontSize:7},{text:'0'},{text:`${this.datos.texto24}`,fontSize:7}],
                   [{text: '13'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto24}`,fontSize:7},{text:'0'},{text:`${this.datos.texto25}`,fontSize:7}],
                   [{text: '14'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto26}`,fontSize:7},{text:'0'},{text:`${this.datos.texto27}`,fontSize:7}],
                   [{text: '15'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto28}`,fontSize:7},{text:'0'},{text:`${this.datos.texto29}`,fontSize:7}],
                   ]
           },
       }
   ],
   styles: {
     header: {
       fontSize: 18,
       bold: true
     },
   },  
     pageSize: 'LETTER',
       pageMargins: [22,120]
       
 };
 this.pdfMaker.generate(dd,'Informe de revisión por la dirección');
  }

}
