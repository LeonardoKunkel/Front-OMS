import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

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
    texto76:'',
    texto77:'',
    texto78:'',
    texto79:'',
    texto80:'',
    texto81:'',
    texto82:'',
    texto83:'',
    texto84:'',
    texto85:'',
    texto86:'',
    texto87:'',
    texto88:'',
    texto89:'',
    texto90:'',
    texto91:'',
    texto92:'',
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
    fecha4:'',
  }

  framework1 = '';
  framework2 = '';
  framework3 = '';
  framework4 = '';

  constructor(private pdfMaker: PdfMakerService, private pickerCtrl: PickerController) { }

  

  async mostrarPicker1() {
      let opts: PickerOptions = {
          buttons:[
              {
                  text: 'Cancel',
                  role: 'cancel'
              },
              {
                  text: 'Done'
              }
          ],
          columns: [
              {
                  name: 'framework',
                  options: [
                    {text: 'Atendida', value: 'A'},
                    {text: 'No atendida', value: 'B'},
                  ]
              }
          ]
      };

      let picker = await this.pickerCtrl.create(opts);
      picker.present();
      picker.onDidDismiss().then( async data =>{
          let col = await picker.getColumn('framework');
          this.framework1 = col.options[col.selectedIndex].text;
      });
  }

  async mostrarPicker2() {
    let opts: PickerOptions = {
        buttons:[
            {
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Done'
            }
        ],
        columns: [
            {
                name: 'framework',
                options: [
                  {text: 'Atendida', value: 'A'},
                  {text: 'No atendida', value: 'B'},
                ]
            }
        ]
    };
    
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data =>{
        let col = await picker.getColumn('framework');
        this.framework2 = col.options[col.selectedIndex].text;
    });
}

async mostrarPicker3() {
    let opts: PickerOptions = {
        buttons:[
            {
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Done'
            }
        ],
        columns: [
            {
                name: 'framework',
                options: [
                  {text: 'Atendida', value: 'A'},
                  {text: 'No atendida', value: 'B'},
                ]
            }
        ]
    };
    
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data =>{
        let col = await picker.getColumn('framework');
        this.framework3 = col.options[col.selectedIndex].text;
    });
}

async mostrarPicker4() {
    let opts: PickerOptions = {
        buttons:[
            {
                text: 'Cancel',
                role: 'cancel'
            },
            {
                text: 'Done'
            }
        ],
        columns: [
            {
                name: 'framework',
                options: [
                  {text: 'Atendida', value: 'A'},
                  {text: 'No atendida', value: 'B'},
                ]
            }
        ]
    };
    
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data =>{
        let col = await picker.getColumn('framework');
        this.framework4 = col.options[col.selectedIndex].text;
    });
}

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
                   [{text:'FECHA', bold:true, fillColor: '#ddd'}, {text:`${this.datos.fecha1}`,fontSize:9}],
                   [{text: 'HORA', bold:true, fillColor: '#ddd'}, {text:`${this.datos.hora1}`,fontSize:9}],
                   [{text: 'OBJETIVO', bold:true, fillColor: '#ddd'}, {text:`${this.datos.texto1}`,fontSize:9}]
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
               widths:[20,183,33,130,75,72], heights:[10,10,],
               body:[
                   [{text: 'No.', bold:true, fillColor: '#ddd'},{text: 'INDICADOR', bold:true, fillColor: '#ddd'},{text: 'Siglas', bold:true, fillColor: '#ddd'},{text: 'Resultado Anterior (%)', bold:true, fillColor: '#ddd'},{text: 'Meta 2020(%)', bold:true, fillColor: '#ddd'},{text: 'Indicador (%)', bold:true, fillColor: '#ddd'}],
                   [{text: '1'},{text: 'ÍNDICE DE FRECUENCIA'},{text: 'I.F.'},{text:`${this.datos.texto2}`,fontSize:9},{text:'0'},{text:`${this.datos.texto3}`,fontSize:9}],
                   [{text: '2'},{text: 'ÍNDICE DE GRAVEDAD'},{text: 'I.G.'},{text:`${this.datos.texto75}`,fontSize:9},{text:'0'},{text:`${this.datos.texto4}`,fontSize:9}],
                   [{text: '3'},{text: 'CUMPLIMIENTO DE ICR´S'},{text: 'I.ICR'},{text:`${this.datos.texto5}`,fontSize:9},{text:'0'},{text:`${this.datos.texto6}`,fontSize:9}],
                   [{text: '4'},{text: 'ÍNDICE DE CAPACITACIÓN PROCEDIMIENTOS'},{text: 'I.CAP'},{text:`${this.datos.texto7}`,fontSize:9},{text:'0'},{text:`${this.datos.texto8}`,fontSize:9}],
                   [{text: '5'},{text: 'CUMPLIMIENTO PROGRAMA DE SIMULACROS'},{text: 'I.SIM'},{text:`${this.datos.texto9}`,fontSize:9},{text:'0'},{text:`${this.datos.texto10}`,fontSize:9}],
                   [{text: '6'},{text: 'DISPOSICIÓN DE RESIDUOS'},{text: 'I.RES'},{text:`${this.datos.texto11}`,fontSize:9},{text:'0'},{text:`${this.datos.texto012}`,fontSize:9}],
                   [{text: '7'},{text: 'CUMPLIMIENTO PROG. MANTTO.'},{text: 'I.IM'},{text:`${this.datos.texto13}`,fontSize:9},{text:'0'},{text:`${this.datos.texto14}`,fontSize:9}],
                   [{text: '8'},{text: 'ATENCIÓN HALLAZGOS AUDITORIA'},{text: 'I.HA'},{text:`${this.datos.texto15}`,fontSize:9},{text:'0'},{text:`${this.datos.texto16}`,fontSize:9}],
                   [{text: '9'},{text: 'PRUEBAS DE EQUIPOS DE SEGURIDAD'},{text: 'I.PE'},{text:`${this.datos.texto17}`,fontSize:9},{text:'0'},{text:`${this.datos.texto18}`,fontSize:9}],
                   [{text: '10'},{text: 'ATENCIÓN RECOMENDACIONES'},{text: 'I.REC'},{text:`${this.datos.texto19}`,fontSize:9},{text:'0'},{text:`${this.datos.texto20}`,fontSize:9}],
                   [{text: '11'},{text: 'CUMPLIMIENTO DE REQUISITOS LEGALES'},{text: 'I.RG'},{text:`${this.datos.texto21}`,fontSize:9},{text:'0'},{text:`${this.datos.texto22}`,fontSize:9}],
                   [{text: '12'},{text: 'CONTAMINACIONES (AIRE, AGUA, SUELO)'},{text: 'I.AAS'},{text:`${this.datos.texto23}`,fontSize:9},{text:'0'},{text:`${this.datos.texto624}`,fontSize:9}],
                   [{text: '13'},{text: 'PROGRAMA DE LIMPIEZA'},{text: 'I.LIM'},{text:`${this.datos.texto25}`,fontSize:9},{text:'0'},{text:`${this.datos.texto26}`,fontSize:9}],
                   [{text: '14'},{text: 'PRUEBAS DE HERMETICIDAD'},{text: 'I.PH'},{text:`${this.datos.texto27}`,fontSize:9},{text:'0'},{text:`${this.datos.texto28}`,fontSize:9}],
                   [{text: '15'},{text: 'CUMPLIMIENTO DE COMUNICACIONES'},{text: 'I.CO'},{text:`${this.datos.texto29}`,fontSize:9},{text:'0'},{text:`${this.datos.texto76}`,fontSize:9}],
                   ]
           },
       },
       {text: '\n\n'},
       {
           text: '2. Evaluación de Requisitos legales',
           style: 'header'
       },
       {text: '\n\n'},
       {
           table:{
               widths:[115,20,50,100,50,180], heights:[10,10,10,10,10],
               body:[
                   [{text:'REQUISITOS LEGALES TOTALES', bold:true, fillColor:'#ddd',colSpan:4},{},{},{},{text:`${this.datos.texto30}`,fontSize:9},{text:'ACCIÓN DE MEJORA',bold:true,fillColor:'#ddd',rowSpan:2,alignment:'center'}],
                   [{text:'CALIFICACIÓN', bold:true, fillColor:'#ddd', colSpan:2},{},{text:'NO.', bold:true, fillColor:'#ddd'},{text:'CUMPLIMIENTO', bold:true, fillColor:'#ddd', colSpan:2},{},{}],
                   [{text:'No se cumple'},{text:'0',alignment:'center'},{},{text:'Punto máximos'},{text:`${this.datos.texto31}`,fontSize:9},{text:`${this.datos.texto77}`,fontSize:9,rowSpan:3}],
                   [{text:'Cumplimiento parcial'},{text:'1',alignment:'center'},{},{text:'Punto obtenidos'},{text:`${this.datos.texto32}`,fontSize:9},{}],
                   [{text:'Cumplimiento total'},{text:'2',alignment:'center'},{},{text:'% cumplimiento'},{text:`${this.datos.texto33}`,fontSize:9},{}],
                   ]
           }
       },
       {text: '\n'},
       {
           text:'3. Objetivos y Metas',
           style:'header'
       },
       {text: '\n'},
       {
           table:{
               widths:[20,100,100,100,100,100], heights:[10,10,10,10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'No.',fillColor:'#ddd',bold:true},{text:'Objetivo',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Metas',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Indicador',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Criterio de Aceptación',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Grado de cumplimiento',fillColor:'#ddd',bold:true,alignment:'center'}],
                   [{text:'1',rowSpan:3},{text:`${this.datos.texto34}`,fontSize:9,rowSpan:3},{text:`${this.datos.texto35}`,fontSize:9,rowSpan:3},{text:`${this.datos.texto36}`,fontSize:9,rowSpan:3},{text:`${this.datos.texto37}`,fontSize:9,rowSpan:3},{text:`${this.datos.texto38}`,fontSize:9,rowSpan:3}],
                   [{},{},{},{},{},{}],
                   [{},{},{},{},{},{}],
                   [{text:'2',rowSpan:3},{text:'',rowSpan:3},{},{},{},{}],
                   [{},{},{},{},{},{}],
                   [{},{},{},{},{},{}],
                   [{text:'3',rowSpan:3},{text:'',rowSpan:3},{},{},{},{}],
                   [{},{},{},{},{},{}],
                   [{},{},{},{},{},{}],
                   [{text:'4',rowSpan:3},{text:'',rowSpan:3},{},{},{},{}],
                   [{},{},{},{},{},{}],
                   [{},{},{},{},{},{}]
                   ]
           }
       },
       {text: '\n\n'},
       {
           text:'4. Seguimiento de hallazgos y recomendaciones de mejora.',
           style:'header'
       },
       {text: '\n\n'},
       {
           table:{
               widhts:[30,50,50,50,50,50,50], heights:[10,10,10,10,10],
               body:[
                   [{text:'No. Revisión',fillColor:'#ddd',bold:true,rowSpan:2,alignment:'center'},{text:'Acuerdo o Acción de mejora',fillColor:'#ddd',bold:true,rowSpan:2,alignment:'center'},{text:'Fecha de cumplimiento',fillColor:'#ddd',bold:true,rowSpan:2},{text:'No. Revisión',fillColor:'#ddd',bold:true,colSpan:3,alignment:'center'},{},{},{text:'Observaciones',fillColor:'#ddd',bold:true,rowSpan:2}],
                   [{},{},{},{text:'Cumplido',fillColor:'#ddd',bold:true},{text:'En proceso',fillColor:'#ddd',bold:true},{text:'No Cumplido',fillColor:'#ddd',bold:true},{}],
                   [{text:`${this.datos.texto78}`,fontSize:9,rowSpan:3},{text:`${this.datos.texto39}`,fontSize:9,rowSpan:3},{text:`${this.datos.fecha2}`,fontSize:9,rowSpan:3},{text:`${this.datos.check1}`,fontSize:9,rowSpan:3},{text:`${this.datos.check2}`,fontSize:9,rowSpan:3},{text:`${this.datos.check3}`,fontSize:9,rowSpan:3},{text:`${this.datos.texto40}`,fontSize:9,rowSpan:3}],
                   [{},{},{},{},{},{},{}],
                   [{},{},{},{},{},{},{}]
                   ]
           }
       },
       {text: '\n\n'},
       {
           text:'5. Auditorías',
           style:'header'
       },
       {text: '\n\n'},
       {
           table:{
               widths:[60,75,60,60,60,200], heights:[10,10,10,10],
               body:[
                   [{text:'Auditoría',fillColor:'#ddd',bold:true,rowSpan:2,alignment:'center'},{text:'Fecha',fillColor:'#ddd',bold:true,rowSpan:2,alignment:'center'},{text:'Hallazgos',fillColor:'#ddd',bold:true,colSpan:3,alignment:'center'},{},{},{text:'Observaciones',fillColor:'#ddd',bold:true,rowSpan:2,alignment:'center'}],
                   [{},{},{text:'Cerrados',fillColor:'#ddd',bold:true},{text:'Abiertos',fillColor:'#ddd',bold:true},{text:'Totales',fillColor:'#ddd',bold:true},{}],
                   [{text:`${this.datos.texto79}`,fontSize:9,rowSpan:2},{text:`${this.datos.fecha3}`,fontSize:9,rowSpan:2},{text:`${this.datos.texto41}`,fontSize:9,rowSpan:2},{text:`${this.datos.texto42}`,fontSize:9,rowSpan:2},{text:`${this.datos.texto43}`,fontSize:9,rowSpan:2},{text:`${this.datos.texto44}`,fontSize:9,rowSpan:2}],
                   [{},{},{},{},{},{}],
                   ]
           }
       },
       {text: '\n'},
       {
           text:'6. Comunicaciones con partes interesadas',
           style:'header'
       },
       {text: '\n'},
       {
           table:{
               widths:[90,65,65,65,65,165],heights:[10,10,10,10,10],
               body:[
                   [{text:'Comunicaciones',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Recibidas',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Atendidas',fillColor:'#ddd',bold:true,alignment:'center'},{text:'No Atendidas',fillColor:'#ddd',bold:true,alignment:'center'},{text:'% de atención',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Acciones de mejora',fillColor:'#ddd',bold:true,alignment:'center'}],
                   [{text:'Quejas'},{text:`${this.datos.texto80}`,fontSize:9},{},{},{text:`${this.datos.texto81}`,fontSize:9},{text:`${this.datos.texto88}`,fontSize:9,rowSpan:3}],
                   [{text:'Sugerencias'},{text:`${this.datos.texto82}`,fontSize:9},{},{},{text:`${this.datos.texto83}`,fontSize:9},{}],
                   [{text:'Solicitud de información'},{text:`${this.datos.texto84}`,fontSize:9},{},{},{text:`${this.datos.texto85}`,fontSize:9},{}],
                   [{text:'Reporte de actos o condiciones inseguras'},{text:`${this.datos.texto86}`,fontSize:9},{},{},{text:`${this.datos.texto87}`,fontSize:9},{}],
                   ]
           }
       },
       {text: '\n'},
       {
           text:'Comunicaciones realizadas',
           style:'header'
       },
       {text: '\n\n'},
       {
           table:{
               widths:[19,190,55,70,185],heights:[10,10,10,10,10,10,10,10,10,10],
               body:[
                   [{text:'No.',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Concepto',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Personal',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Contratistas',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Observaciones',fillColor:'#ddd',bold:true,alignment:'center'}],
                   [{text:'1',alignment:'center'},{text:'Política'},{text:`${this.datos.check4}`,fontSize:9},{text:`${this.datos.check5}`,fontSize:9},{text:`${this.datos.texto45}`,fontSize:9,rowSpan:9}],
                   [{text:'2',alignment:'center'},{text:'Cumplimiento de objetivos y metas'},{text:`${this.datos.check6}`,fontSize:9},{text:`${this.datos.check7}`,fontSize:9},{}],
                   [{text:'3',alignment:'center'},{text:'Funciones, responsabilidades y autoridad'},{text:`${this.datos.check8}`,fontSize:9},{text:`${this.datos.check9}`,fontSize:9},{}],
                   [{text:'4',alignment:'center'},{text:'Riesgos e impactos ambientales'},{text:`${this.datos.check10}`,fontSize:9},{text:`${this.datos.check11}`,fontSize:9},{}],
                   [{text:'5',alignment:'center'},{text:'Requisitos legales'},{text:`${this.datos.check12}`,fontSize:9},{text:`${this.datos.check13}`,fontSize:9},{}],
                   [{text:'6',alignment:'center'},{text:'Incidentes y accidentes'},{text:`${this.datos.check14}`,fontSize:9},{text:`${this.datos.check15}`,fontSize:9},{}],
                   [{text:'7',alignment:'center'},{text:'Resultados de auditorías'},{text:`${this.datos.check16}`,fontSize:9},{text:`${this.datos.check17}`,fontSize:9},{}],
                   [{text:'8',alignment:'center'},{text:'Resultados de desempeño'},{text:`${this.datos.check18}`,fontSize:9},{text:`${this.datos.check19}`,fontSize:9},{}],
                   [{text:'9',alignment:'center'},{text:'Comunicaciones a contratistas'},{text:`${this.datos.check20}`,fontSize:9},{text:`${this.datos.check21}`,fontSize:9},{}],
                   ]
           }
       },
       {text: '\n\n'},
       {
           text:'7. Cambios en las circunstancias',
           style:'header'
       },
       {text: '\n\n'},
       {
           table:{
               widths:[200,345],heights:[10,10,10,10,10],
               body:[
                   [{text:'Origen',fillColor:'#ddd',bold:true},{text:'Motivo',fillColor:'#ddd',bold:true}],
                   [{text:'Cambio en Marco normativo'},{text:`${this.datos.texto46}`,fontSize:9}],
                   [{text:'Cambio en instalaciones'},{text:`${this.datos.check47}`,fontSize:9}],
                   [{text:'Cambios en personal'},{text:`${this.datos.check48}`,fontSize:9}],
                   [{text:'Otros'},{text:`${this.datos.check49}`,fontSize:9}],
                   ]
           }
       },
       {text: '\n\n\n\n\n\n\n\n'},
       {
           text:'8. Recomendaciones de incidentess y accidentes',
           style:'header'
       },
       {text:'\n\n'},
       {
           table:{
               widths:[160,70,310],heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'Clase de incidente',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Cantidad',fillColor:'#ddd',bold:true,alignment:'center'},{text:'Descripción',fillColor:'#ddd',bold:true,alignment:'center'}],
                   [{text:'Incidente incapacitante'},{text:`${this.datos.texto50}`,fontSize:9},{text:`${this.datos.texto90}`,fontSize:9}],
                   [{text:'Desprendimiento de manguera en dispensarios'},{text:`${this.datos.texto51}`,fontSize:9},{text:`${this.datos.texto52}`,fontSize:9}],
                   [{text:'Fugas'},{text:`${this.datos.texto91}`,fontSize:9},{text:`${this.datos.texto89}`,fontSize:9}],
                   [{text:'Derrame'},{text:`${this.datos.texto53}`,fontSize:9},{text:`${this.datos.texto54}`,fontSize:9}],
                   [{text:'Incendio'},{text:`${this.datos.texto55}`,fontSize:9},{text:`${this.datos.texto56}`,fontSize:9}],
                   [{text:'Impactos ambientales'},{text:`${this.datos.texto92}`,fontSize:9},{text:`${this.datos.texto57}`,fontSize:9}],
                   ]
           }
       },
       {text:'\n\n'},
       {
           text:'Estado de análisis y recomendaciones derivadas de incidentes',
           style:'header'
       },
       {text:'\n'},
       {
           table:{
               widths:[80,65,90,60,60,60,90], heights:[10,10,10,10,10,10],
               body:[
                   [{text:'Investigaciones de Causa raíz',fillColor:'#ddd',bold:true,colSpan:7,alignment:'center'},{},{},{},{},{},{}],
                   [{text:'Análisis de Causa raíz',fillColor:'#ddd',bold:true,colSpan:3,alignment:'center'},{},{},{text:'Recomendaciones',fillColor:'#ddd',bold:true,colSpan:4,alignment:'center'},{},{},{}],
                   [{text:'Requeridos',fillColor:'#ddd',bold:true},{text:'Realizados',fillColor:'#ddd',bold:true},{text:'% cumplimiento',fillColor:'#ddd',bold:true},{text:'Emitidas',fillColor:'#ddd',bold:true},{text:'Atendidas',fillColor:'#ddd',bold:true},{text:'Vencidas',fillColor:'#ddd',bold:true},{text:'% cumplimiento',fillColor:'#ddd',bold:true}],
                   [{text:`${this.datos.texto58}`,fontSize:9},{text:`${this.datos.texto59}`,fontSize:9},{text:`${this.datos.texto60}`,fontSize:9},{text:`${this.datos.texto61}`,fontSize:9},{text:`${this.datos.texto62}`,fontSize:9},{text:`${this.datos.texto63}`,fontSize:9},{text:`${this.datos.texto64}`,fontSize:9}],
                   [{text:'Acciones de mejora',fillColor:'#ddd',bold:true,colSpan:7},{},{},{},{},{},{}],
                   [{text:`${this.datos.texto65}`,fontSize:9,colSpan:7},{},{},{},{},{},{}],
                   ]
           }
       },
       {text:'\n\n'},
       {
           text:'9. Evaluación de la Política',
           style:'header'
       },
       {text:'\n\n'},
       {
           table:{
               widths:[245,20,20,245], heights:[10,10,10,10,10,10,10],
               body:[
                   [{text:'Concepto',fillColor:'#ddd',bold:true,alignment:'center',rowSpan:2},{text:'Cumple',fillColor:'#ddd',bold:true,alignment:'center',colSpan:2},{},{text:'Cambio requerido',fillColor:'#ddd',bold:true,alignment:'center',rowSpan:2}],
                   [{},{text:'Si',fillColor:'#ddd',bold:true},{text:'No',fillColor:'#ddd',bold:true},{}],
                   [{text:'Se utiliza como marco de referencia para establecer los objetivos del SASISOPA?'},{text:`${this.datos.check22}`,fontSize:9},{text:`${this.datos.check23}`,fontSize:9},{text:`${this.datos.texto66}`,fontSize:9}],
                   [{text:'Considera el control de los aspectos ambientales y peligros y evaluación de los riesgos e impactos ambientales, asociados a la instalación?'},{text:`${this.datos.check24}`,fontSize:9},{text:`${this.datos.check25}`,fontSize:9},{text:`${this.datos.texto67}`,fontSize:9}],
                   [{text:'Considera el cumplimiento de los requisitos legales?'},{text:`${this.datos.check26}`,fontSize:9},{text:`${this.datos.check27}`,fontSize:9},{text:`${this.datos.texto68}`,fontSize:9}],
                   [{text:'Considera la participación del personal?'},{text:`${this.datos.check28}`,fontSize:9},{text:`${this.datos.check29}`,fontSize:9},{text:`${this.datos.texto69}`,fontSize:9}],
                   [{text:'Considera el compromiso para la mejora continua?'},{text:`${this.datos.check30}`,fontSize:9},{text:`${this.datos.check31}`,fontSize:9},{text:`${this.datos.texto70}`,fontSize:9}],
                   ]
           }
       },
       {text:'\n\n'},
       {
           text:'10. Decisiones relativas a las oportunidades de mejora',
           style: 'header'
       },
       {text:'\n\n'},
       {
           table:{
               widths:[20,130,170,100,100], heights:[10,10,10,10,10],
               body:[
                   [{text:'No.',fillColor:'#ddd',bold:true},{text:'Oportunidad de trabajo',fillColor:'#ddd',bold:true},{text:'Acciones',fillColor:'#ddd',bold:true},{text:'Responsable',fillColor:'#ddd',bold:true},{text:'Fecha compromiso',fillColor:'#ddd',bold:true}],
                   [{text:'1'},{text:`${this.datos.texto71}`,fontSize:9,rowSpan:4},{text:`${this.datos.texto72}`,fontSize:9,rowSpan:4},{text:`${this.datos.texto71}`,fontSize:9,rowSpan:4},{text:`${this.datos.fecha4}`,fontSize:9,rowSpan:4}],
                   [{text:'2'},{},{},{},{}],
                   [{text:'3'},{},{},{},{}],
                   [{text:'4'},{},{},{},{}],
                   ]
           }
       },
       {text:'\n\n'},
       {
           table:{
               widths:[555], heights:[10,80],
               body:[
                   [{text:'Conclusiones',fillColor:'#ddd',bold:true}],
                   [{text:`${this.datos.texto74}`,fontSize:9,rowSpan:4}]
                   ]
           }
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
