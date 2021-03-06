import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { ContratistasServiceService } from '../../services/Elemento 6/contratistas-service.service';

@Component({
  selector: 'app-contratistas-modal',
  templateUrl: './contratistas-modal.page.html',
  styleUrls: ['./contratistas-modal.page.scss'],
})
export class ContratistasModalPage implements OnInit {
  datos:any={
    caracteristicasPersonales:'',
    requerimientosFisicos:'',
    herramientasEquipos:'',
    equipoProteccion:'',
    nivelAcademico: '',
    personalCargo: ''
  }

  constructor(
    private modalController: ModalController,
    private pdfMaker: PdfMakerService,
    private contratistaServicio: ContratistasServiceService
     ) { }

  ngOnInit() {
  }

  crearContratista(){
    this.contratistaServicio.creatteContratista(this.datos).subscribe((data:any)=>{
      console.log(data);
      
    })
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

  enviarForm(formulario){
    console.log(this.datos)
  }
 
 
 
 
 
 
   print(){
     // playground requires you to assign document definition to a variable called dd
 
 var dd = {
   header: function(){
     return {
         table: { widths: [565],heights:[50,15,15],
 body: [
 
   [{text:''}],
   [{text:'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',alignment:'center',bold:true}],
   [{text:'PERFIL DE PUESTO DE TRABAJO',alignment:'center',bold:true,fillColor: '#e6e6e6'}],
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
                   [{text:'PUESTO',bold:true},{text:'Director',colSpan:3},{},{}],
                   [{text:'AREA',bold:true},{text:'Dirección',colSpan:3},{},{}],
                   [{text:'JEFE INMEDIATO',bold:true},{text:'',colSpan:3},{},{}],
                   [{text:'OBJETIVO DEL PUESTO',bold:true},{text:'Supervisar la correcta aplicación de los procedimientos que involucran controles de los aspectos ambientales significativos y de riesgos de las actividades propias de las operaciones y procesos de la Planta de Distribución.',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'FUNCIONES ESPECIFÍCAS',bold:true},{text:'•	Capacitar al personal en los procedimientos aplicables al control de los aspectos ambientales significativos y riesgos.\n•	Cumplir el programa de mantenimiento a sistemas, instalaciones, equipos o accesorios de la Planta de Distribución. \n•	Establecer en coordinación del representante Técnico, las funciones, responsabilidad y autoridad de los integrantes de la Organización \n•	Identificar, asignar y demostrar que se cuenta con los recursos necesarios para implementar el Sistema de Administración (SA).',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'CONOCIMIENTOS ESPECIFÍCOS',bold:true},{text:'•	P-SA-06 COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRANAMIENTO',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'CARACTERÍSTICAS PERSONALES',bold:true},{text:`${this.datos.caracteristicasPersonales}`},{text:'DESTREZAS TÉCNICAS',bold:true},{text:'•Comunicación\n•Responsabilidad\n•Amabilidad\n•Proactividad'}],
                   [{text:'NIVEL ACADEMICO REQUERIDO',bold:true},{text:'Preparatoria',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'REQUERIMIENTOS FÍSICOS',bold:true},{text:`${this.datos.requerimientosFisicos}`,colSpan:3,alignment:'justify'},{},{}],
                   [{text:'PERSONAL A SU CARGO',bold:true},{text:'•Encargado de anden\n•Llenadores\n•Personal de Mantenimiento',colSpan:3,alignment:'justify'},{},{}],
                   [{text:'HERRAMIENTAS Y O EQUIPOS',bold:true},{text:`${this.datos.herramientasEquipos}`,colSpan:3,alignment:'justify'},{},{}],
                   [{text:'EQUIPO DE PROTECCION PERSONAL',bold:true},{text:`${this.datos.equipoProteccion}`,colSpan:3,alignment:'justify'},{},{}],
                   [{text: 'NIVEL ACADÉMICO', bold: true}, {text: `${this.datos.nivelAcademico}`, colSpan: 3, alignment: 'justify'}, {}, {}],
                   [{text: 'PERSONAL A SU CARGO', bold: true}, {text: `${this.datos.personalCargo}`, colSpan: 3, alignment: 'justify'}, {}, {}],
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
 this.pdfMaker.generate(dd, 'Objetivos,Etas e Indicadores');
   }
 

}
