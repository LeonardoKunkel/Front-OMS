import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
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
    area:'',
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

  constructor(public alertController: AlertController,private pdfMaker: PdfMakerService) { }
  
  ngOnInit() {
   
  }

    
  //   async ver() {
     
  //   const alert = await this.alertController.create({
  //     header: 'Alert',
  //     subHeader: 'Importante',
  //     message: 'Seguro de realizar esta accion',
  //     buttons: [
  //       {
  //         text: 'Okay',
  //         handler: () => {
  //           console.log('Confirm Okay');
  //          this.change()

  //         }
  //       }
  //     ]
  //         });

          

  //   await alert.present();
  // }
  
  // public disabled = true;

   

  //  change() {
  //   this.disabled = false;
  // }




  pdf(){
    console.log('jkdjddjk');
    // playground requires you to assign document definition to a variable called dd

var dd = {
  header: function(){
    return {
        table: { widths: [565],heights:[50,15,15],
body: [

  [{text:''}],
  [{text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',alignment:'center',bold:true}],
  [{text:'PERFIL DE PUESTO DE TRABAJO',alignment:'center',bold:true}],
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
              widths: [140,160,100,140],
              heights:[0,0,0,0,40,40,40,20,20,40,20,40],
              body:[
                  [{text:'PUESTO'},{text:`${this.datos.puesto}`,colSpan:3},{},{}],
                  [{text:'AREA'},{text:`${this.datos.area}`,colSpan:3},{},{}],
                  [{text:'JEFE INMEDIATO'},{text:`${this.datos.nombre}`,colSpan:3},{},{}],
                  [{text:'OBJETIVO DEL PUESTO'},{text:`${this.datos.funcionesEspecificas}`,colSpan:3},{},{}],
                  [{text:'FUNCIONES ESPECIFÍCAS'},{text:`${this.datos.funcionesEspecificas}`,colSpan:3},{},{}],
                  [{text:'CONOCIMIENTOS ESPECIFÍCOS'},{text:`${this.datos.conocimientosFisiscos}`,colSpan:3},{},{}],
                  [{text:'CARACTERÍSTICAS PERSONALES'},{text:`${this.datos.caracteristicasPersonales}`},{text:'DESTREZAS TÉCNICAS'},{}],
                  [{text:'NIVEL ACADEMICO REQUERIDO'},{text:`${this.datos.nivelAcademico}`,colSpan:3},{},{}],
                  [{text:'REQUERIMIENTOS FÍSICOS'},{text:`${this.datos.requerimientosFisicos}`,colSpan:3},{},{}],
                  [{text:'PERSONAL A SU CARGO'},{text:`${this.datos.personalCargo}`,colSpan:3},{},{}],
                  [{text:'HERRAMIENTAS Y O EQUIPOS'},{text:`${this.datos.herramientasEquipos}`,colSpan:3},{},{}],
                  [{text:'EQUIPO DE PROTECCION PERSONAL'},{text:`${this.datos.proteccionPersonal}`,colSpan:3},{},{}],
                  
                  ]
          }
      },{
          text:'\n\n'
      },{
          table:{
               widths:[175,185,185],
               heights:[50],
               
              body:[
                  ['REVISADO POR:\n\n\n\n Roberto Muñoz Torres REPRESENTANTE TÉCNICO', 'APROBADO POR:\n\n\n\nFernando Bedoy Ruiz', 'FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"']
                  ]
          }
          
          
      }
      
      
       ]
 ,
  pageSize: 'LETTER',
  pageMargins: [22,130]
};
this.pdfMaker.generate(dd, 'VI.Perfil de puesto de trabajo.pdf');  
  }

  



  enviarForm(formulario){
    console.log('Enviado');
    console.log(this.datos);
    
    
    
  }




 
}
