import { Component, OnInit } from '@angular/core';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ObjetivosMetasService } from '../../services/Elemento 4/objetivos-metas.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cuatro2',
  templateUrl: './cuatro2.page.html',
  styleUrls: ['./cuatro2.page.scss'],
})
export class Cuatro2Page implements OnInit {

  objetivos: String;
  datos: {
    meta1,
    meta2,
    meta3
  };

  constructor(
  private pdfMaker: PdfMakerService,
  private objetivo: ObjetivosMetasService,
  public alertController: AlertController,
  public toast: ToastController) {
    this.objetivos = 'Muy bien!!!!!!!!!!';
  }

  ngOnInit() {

  }

  updateGoals() {
    this.showAlert();
    console.log(this.objetivos);
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Metas a realizar',
      message: ' ' + this.objetivos,
      buttons: [ {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.doc(this.objetivos);

        }
      }
    ]
    });

    await alert.present();
  }

  doc(param) {
    const residuos = 'Reducción en la generación de residuos peligrosos';
    const agua = 'Reducción en el consumo de agua';
    const energia = 'Reducción en el consumo de energia';
    const mantenimiento = 'Cumplimiento al programa de mantenimiento';
    const capacitaciones = 'Incrementar capacitaciones a los trabajadoreas';
    const venta  = 'Reducción en el consumo de agua';

    if (param === residuos ) {
      console.log('datos de residuos');
      var insert = {
        meta1: 'Reducir un 10% anual los residuos del producto.',
        meta2: 'Reducir las ??????',
        meta3: ' '
      };
      console.log(insert);
      this.createMetaObjetivo(insert);
    } else if (param === agua) {
      console.log('datos de aguas');
      var insert = {
        meta1: 'Reducir un 10% anual los residuos del vital liquido.',
        meta2: 'Solventar las fugas.',
        meta3: 'Potencias sistema de limpieza en seco (barrer,aspirar).'
      };
      console.log(insert);
    } else if ( param === energia) {
      console.log('datos de energia');
      var insert = {
        meta1: 'Reducir un 10% anual en el consumo de energia',
        meta2: 'Aprovechar el punto maximo la luz natural',
        meta3: 'Usar bombillos ahorradores'
      };
      console.log(insert);
    } else if ( param === mantenimiento) {
      console.log('datos de mantenimiento');
      var insert = {
        meta1: 'Reparar equipo dañados',
        meta2: 'Planificar mantenimientos preventivos periodicamente',
        meta3: ''
      };
      console.log(insert);
    } else if ( param === capacitaciones ) {
      console.log('datos de capacitaciones');
      var insert = {
        meta1: 'Reforzar conocimientos',
        meta2: 'Aprender nuevos temas',
        meta3: 'Prevenir riesgos de trabajo'
      };
      console.log(insert);
    } else if ( param === venta ) {
      console.log('datos de ventas');
      var insert = {
        meta1: 'Establecer metas de ventas diarias',
        meta2: 'Capacitar a los vendedores',
        meta3: 'Realizar marketing'
      };
      console.log(insert);
    }
  }

  // Crear el post en la base de datos
  createMetaObjetivo(datillos) {
    this.objetivo.createMetaObjetivo(datillos).subscribe((data: any) => {
    console.log(data);
    });
  }

  async enviarForm(formulario) {
    
    const toast = await this.toast.create({
      message: 'Datos guardados.',
      duration: 2000
    });
    toast.present();
  }
//   pdf(){
//     // playground requires you to assign document definition to a variable called dd

// var dd = {
//   header: function(){
//     return {
//         table: { widths: [565],heights:[50,15,15],
// body: [

//   [{text:''}],
//   [{text:'IV. OBJETIVOS, METAS E INDICADORES',alignment:'center',bold:true}],
//   [{text:'OBJETIVOS, METAS E INDICADORES',alignment:'center',bold:true}],
// ]

// }, margin: [22,20]
//     };
//   },
//   footer: function(){
//     return {
//         table:{
//  headerRows:1, 
//  widths: [510],
//            body : [
//            [''],
//            [''],
//            ['']
//                ]
//       }, layout : 'headerLineOnly',
//         margin: [70,90]
//     };
//   },
  
//   content:[
//       {
//           table:{
//               widths: [90,350,50,50],
//               body:[
//                   [{text:'OBJETIVO 1',fontSize:9,	fillColor: '#dddddd'},{text:`${this.datos.objetivo}`,colSpan:3},{},{}],
//                   [{text:'PROCESO',fontSize:9,	fillColor: '#dddddd'},{text:`${this.datos.proceso}`,colSpan:3},{text:''},{}],
//                   [{text:'RESPONSABLE',fontSize:9,	fillColor: '#dddddd'},{text:`REPRESENTANTE TÉCNICO: ${this.datos.objetivo}`,fontSize:9},{text:'PERIODO',fontSize:9,	fillColor: '#dddddd'},{text:`${this.datos.periodo}`}]
//                   ]
//           }
//       },
//       {text:'\n'},
//       {
//           table:{
//               widths: [16,120,120,55,55,74,74],
//               heights:[10,25,25,25],
//               body:[
                    
//                   [{text:'No.',fontSize:9,fillColor: '#dddddd',alignment:'center',bold:true},{text:'METAS',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'ACTIVIDAD',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'INDICADOR',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'SOPORTE',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'FRECUENCIA DE EVALUACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'CRITERIO DE ACEPTACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true}],
//                   [{text:'1'},{text:`${this.datos.meta1}`},{text:`${this.datos.actividad1}`},{text:`${this.datos.indicador1}`},{text:`${this.datos.soporte1}`},{text:`${this.datos.frecuencia1}`},{text:`${this.datos.criterio1}`}],
//                   [{text:'2'},{text:`${this.datos.meta2}`},{text:`${this.datos.actividad2}`},{text:`${this.datos.indicador2}`},{text:`${this.datos.soporte2}`},{text:`${this.datos.frecuencia2}`},{text:`${this.datos.criterio2}`}],
//                   [{text:'3'},{text:`${this.datos.meta3}`},{text:`${this.datos.actividad3}`},{text:`${this.datos.indicador3}`},{text:`${this.datos.soporte3}`},{text:`${this.datos.frecuencia3}`},{text:`${this.datos.criterio3}`}],
//                   ]
//           }
          
          
//       },
//       {text:'\n'},
//       {
//           table:{
//               widths: [90,350,50,50],
//               body:[
//                   [{text:'OBJETIVO 1',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{},{}],
//                   [{text:'PROCESO',fontSize:9,	fillColor: '#dddddd'},{text:'',colSpan:3},{text:''},{}],
//                   [{text:'RESPONSABLE',fontSize:9,	fillColor: '#dddddd'},{text:'REPRESENTANTE TÉCNICO:',fontSize:9},{text:'PERIODO',fontSize:9,	fillColor: '#dddddd'},{}]
//                   ]
//           }
//       },
//       {text:'\n'},
//       {
//           table:{
//               widths: [16,120,120,55,55,74,74],
//               heights:[10,25,25,25],
//               body:[
                    
//                   [{text:'No.',fontSize:9,fillColor: '#dddddd',alignment:'center',bold:true},{text:'METAS',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'ACTIVIDAD',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'INDICADOR',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'SOPORTE',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'FRECUENCIA DE EVALUACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true},{text:'CRITERIO DE ACEPTACIÓN',fontSize:9,	fillColor: '#dddddd',alignment:'center',bold:true}],
//                   [{text:'1'},{},{},{},{},{},{}],
//                   [{text:'2'},{},{},{},{},{},{}],
//                   [{text:'3'},{},{},{},{},{},{}] 
//                   ]
//           }
          
          
//       },{text:'\n'},
//       {
//           table:{
//                widths: [182,182,182],
//                heights:[10,80],
//               body:[
//                   [{text:'REVISADO POR:',fontSize:9,	fillColor: '#dddddd',alignment:'center'},{text:'APROBADO POR:',fontSize:9,	fillColor: '#dddddd',alignment:'center'},{text:'FECHA DE APROBACIÓN:',fontSize:9,	fillColor: '#dddddd',alignment:'center'}],
//                   [{text:'\n\n\n\nRoberto Muñoz Torres \nREPRESENTANTE TÉCNICO'},{text:'\n\n\n\nFernando Bedoy Ruiz \nMAXIMA AUTORIDAD'},{text:'\n\n\n\n\nFECHA DE APROBACIÓN:'}]
//                   ]
//           }
//       }
      
//       ]
//  ,
//   pageSize: 'LETTER',
//   pageMargins: [22,130]
// };

// this.pdfMaker.generate(dd, 'Objetivos,Etas e Indicadores');
//   }

}
