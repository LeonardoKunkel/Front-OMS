import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { AlertController } from '@ionic/angular';
import { FormsModule, Form } from '@angular/forms';


@Component({
  selector: 'app-punto-seis',
  templateUrl: './punto-seis.page.html',
  styleUrls: ['./punto-seis.page.scss'],
})
export class PuntoSeisPage implements OnInit {
  pdfObj=null;
  datos:any={
    nombre:'',
    caracteristicasPersonales:'',
    requerimientosFisicos:'',
    conocimientosFisiscos:'',
    deztrezasTecnicas:'',
    nivelAcademico:'',
    objetivoPuesto:'',
    funcionesEspecificas:'',
    personalCargo:'',
    herramientasEquipos:'',
    proteccionPersonal:''
  }

  @ViewChild('slider') slider: IonSlides
  @ViewChild('formulario') formulario: Form

  constructor(public alertController: AlertController) { }
  
  ngOnInit() {
   
  }

    
    async ver() {
     
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Importante',
      message: 'Seguro de realizar esta accion',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
           this.change()

          }
        }
      ]
          });

          

    await alert.present();
  }
  
  public disabled = true;

   pdf() {
    console.log('action triggered');
    

  }

   change() {
    this.disabled = false;
  }




//   Pdf(){

    

//    // playground requires you to assign document definition to a variable called dd

// var dd = {
//     header: function(){
//       return {
//           table: { widths: [565],heights:[50,15,15],
// body: [

//     [{text:''}],
//     [{text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',alignment:'center',bold:true}],
//     [{text:'PERFIL DE PUESTO DE TRABAJO',alignment:'center',bold:true}],
// ]

// }, margin: [22,20]
//       };
//     },
//     footer: function(){
//       return {
//           table:{
//    headerRows:1, 
//    widths: [510],
//              body : [
//              [''],
//              [''],
//              ['']
//                  ]
//         }, layout : 'headerLineOnly',
//           margin: [70,90]
//       };
//     },
    
//     content:[
//         {
//             table:{
//                 widths: [140,160,100,140],
//                 heights:[0,0,0,0,40,40,40,20,20,40,20,40],
//                 body:[
//                     [{text:'PUESTO'},{text:'',colSpan:3},{},{}],
//                     [{text:'AREA'},{text:'',colSpan:3},{},{}],
//                     [{text:'JEFE INMEDIATO'},{text:`${this.datos.nombre}`,colSpan:3},{},{}],
//                     [{text:'OBJETIVO DEL PUESTO'},{text:`${this.datos.objetivo}`,colSpan:3},{},{}],
//                     [{text:'FUNCIONES ESPECIFÍCAS'},{text:`${this.datos.funciones}`,colSpan:3},{},{}],
//                     [{text:'CONOCIMIENTOS ESPECIFÍCOS'},{text:`${this.datos.conocimientos}`,colSpan:3},{},{}],
//                     [{text:'CARACTERÍSTICAS PERSONALES'},{text:`${this.datos.caracteristicas}`},{text:'DESTREZAS TÉCNICAS'},{text:`${tipos}`}],
//                     [{text:'NIVEL ACADEMICO REQUERIDO'},{text:`${this.datos.nivel}`,colSpan:3},{},{}],
//                     [{text:'REQUERIMIENTOS FÍSICOS'},{text:`${this.datos.requerimientos}`,colSpan:3},{},{}],
//                     [{text:'PERSONAL A SU CARGO'},{text:`${this.datos.personal}`,colSpan:3},{},{}],
//                     [{text:'HERRAMIENTAS Y O EQUIPOS'},{text:`${this.datos.herramientas}`,colSpan:3},{},{}],
//                     [{text:'EQUIPO DE PROTECCION PERSONAL'},{text:`${this.datos.proteccion}`,colSpan:3},{},{}],
                    
//                     ]
//             }
//         },{
//             text:'\n\n'
//         },{
//             table:{
//                  widths:[175,185,185],
//                  heights:[50],
                 
//                 body:[
//                     ['REVISADO POR:\n\n\n\n Roberto Muñoz Torres REPRESENTANTE TÉCNICO', 'APROBADO POR:\n\n\n\nFernando Bedoy Ruiz', 'FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"']
//                     ]
//             }
            
            
//         }
        
        
//          ]
//    ,
//     pageSize: 'LETTER',
//     pageMargins: [22,130]
// };
//     this.pdfObj = pdfMake.createPdf(dd);
//     this.pdfObj.download();
    
//   }

  



//   enviarForm(formulario){
//     this.Pdf();
    
//   }

 


 
}
