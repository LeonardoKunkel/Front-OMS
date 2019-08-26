import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { bloomHasToken } from '@angular/core/src/render3/di';
import { FormsModule, Form } from '@angular/forms';


@Component({
  selector: 'app-punto-seis',
  templateUrl: './punto-seis.page.html',
  styleUrls: ['./punto-seis.page.scss'],
})
export class PuntoSeisPage implements OnInit {
  pdfObj=null;
  //  nombre=null
  // caracteristicas=null;
  // requerimientos=null;
  // conocimientos=null;
  // tipos=null;
  // nivel=null;

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

  public action() {
    console.log('action triggered');
    this.Pdf(this.formulario);
    

  }

  public change() {
    this.disabled = false;
   // console.log(nombre);
    //console.log('Prueba para el pdf');
    //console.log(nombre);
  }




  Pdf(formulario){
    const nombre=formulario.form.value.nombre
    const caracteristicas=formulario.form.value.caracteristicas
    const requerimientos=formulario.form.value.requerimientos
    const conocimientos=formulario.form.value.conocimientos
    const tipos=formulario.form.value.tipos
    const nivel=formulario.form.value.nivel
    const objetivo=formulario.form.value.objetivo
    const funciones=formulario.form.value.funciones
    const personal=formulario.form.value.personal
    const herramientas=formulario.form.value.herramientas
    const proteccion=formulario.form.value.proteccion

    

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
                    [{text:'PUESTO'},{text:'',colSpan:3},{},{}],
                    [{text:'AREA'},{text:'',colSpan:3},{},{}],
                    [{text:'JEFE INMEDIATO'},{text:`${nombre}`,colSpan:3},{},{}],
                    [{text:'OBJETIVO DEL PUESTO'},{text:`${objetivo}`,colSpan:3},{},{}],
                    [{text:'FUNCIONES ESPECIFÍCAS'},{text:`${funciones}`,colSpan:3},{},{}],
                    [{text:'CONOCIMIENTOS ESPECIFÍCOS'},{text:`${conocimientos}`,colSpan:3},{},{}],
                    [{text:'CARACTERÍSTICAS PERSONALES'},{text:`${caracteristicas}`},{text:'DESTREZAS TÉCNICAS'},{text:`${tipos}`}],
                    [{text:'NIVEL ACADEMICO REQUERIDO'},{text:`${nivel}`,colSpan:3},{},{}],
                    [{text:'REQUERIMIENTOS FÍSICOS'},{text:`${requerimientos}`,colSpan:3},{},{}],
                    [{text:'PERSONAL A SU CARGO'},{text:`${personal}`,colSpan:3},{},{}],
                    [{text:'HERRAMIENTAS Y O EQUIPOS'},{text:`${herramientas}`,colSpan:3},{},{}],
                    [{text:'EQUIPO DE PROTECCION PERSONAL'},{text:`${proteccion}`,colSpan:3},{},{}],
                    
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
    this.pdfObj = pdfMake.createPdf(dd);
    this.pdfObj.download();
    
  }

  



  enviarForm2(formulario2){
      console.log('Hola mundo');
      //var ddd= document.getElementsByName('R1');
       const proteccion=formulario2.value.R1;
       console.log(proteccion);
      //console.log(ddd);
      
      
 
    
    

  }

 


 
}
