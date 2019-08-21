import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { bloomHasToken } from '@angular/core/src/render3/di';


@Component({
  selector: 'app-punto-seis',
  templateUrl: './punto-seis.page.html',
  styleUrls: ['./punto-seis.page.scss'],
})
export class PuntoSeisPage implements OnInit {
  pdfObj=null;
   nombre=null
  caracteristicas=null;
  requerimientos=null;
  conocimientos=null;
  tipos=null;
  nivel=null;

  @ViewChild('slider') slider: IonSlides

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

    async  ver() {
     
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Importante',
      message: 'Seguro de realizar esta accion',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.change();

          }
        }
      ]
          });

          

    await alert.present();
  }
  
  public disabled = true;

  public action(nombre) {
    var ff =nombre;
    console.log('action triggered');
    console.log(ff);
    
   this.Pdf(this.nombre);
    
  }

  public change(nombre) {
    this.disabled = false;
    
  }


  enviarForm(formulario){
    const nombre=formulario.form.value.nombre
    const caracteristicas=formulario.form.value.caracteristicas
    const requerimientos=formulario.form.value.requerimientos
    const conocimientos=formulario.form.value.conocimientos
    const tipos=formulario.form.value.tipos
    const nivel=formulario.form.value.nivel
       console.log(nombre,caracteristicas,requerimientos,conocimientos,tipos,nivel);
      var msg='Deseas continuar'
      this.action(nombre)
      
  }

  enviarForm2(formulario2){
    
    
    const objetivo=formulario2.form.value.objetivo
    const funciones=formulario2.form.value.funciones
    const personal=formulario2.form.value.personal
    const herramientas=formulario2.form.value.herramientas
    const proteccion=formulario2.form.value.proteccion
    console.log(objetivo,funciones,personal,herramientas,proteccion);
    

  }

  Pdf(nombre) {
    console.log(nombre);
    
    
    var dd = {
      header: function(){
        return {
          table:{
          headerRows:1, 
          widths: [510],
               body : [
               ['DESARROLLO Y VERIFICACION DEL SISTEMA DE ADMINISTRACION BASADO EN LAS DACG SASISOPA PARA LAS ESTACIONES DE SERVICIO MACHOTE'],
           ['ACE-COT-PS-190XXXX  \nXXXX, 2019']
                   ]
             }, layout : 'headerLineOnly',
            margin: [72,40]
        };
      },
      footer: function(){
        return {
            table:{
          headerRows:1, 
          widths: [510],
               body : [
               [''],
               [{text:'PROPUESTA TÉCNICA ECONÓMICA  / DESARROLLO Y VERIFICACIÓN  DEL SISTEMA  SASISOPA',fontSize:9,alignment:'center'}]
                   ]
             }, layout : 'headerLineOnly',
            margin: [72,40]
        };
      },
      
      content:[
     
      {
        
        table: {
          heights: [20,20],
          body: [
            ['Descripción:','Cotización de Desarrollo y Verificación del sistema de Administración basado en las DACG SASISOPA para actividades de expendio al público de gasolina y diésel.'],
            ['Elaboró:', 'Lic. Ana Karen Flores Velázquez '],
          ]
        },pageBreak: 'after'
      }, 
      
    {
        ol: [
          `Contenido ${this.nombre}`,
          'Resumen Ejecutivo',
          'Propuesta técnica',
          'Propuesta Económica',
          'Trabajos adicionales, modificaciones o cancelaciones',
          'Confidencialidad',
          'información fiscal',
          
          {
            ul: [
              'subitem 1',
              'subitem 2',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
              {text: [
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                  'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                ]}
            ]
          },
          'item 3\nsecond line of item3',
        ],pageBreak: 'after'
      },
      
      {text:'Resumen ejecutivo' ,style: 'header', fontSize:20,bold: true,	alignment: 'center'
          
      },{
        text:'Mediante este documento y como respuesta a su amable solicitud, ACE OIL & GAS S.A. DE C.V, propone ejecutar un conjunto de servicios para el Desarrollo y Verificación del Sistema de Administración basado en las DACG SASISOPA para actividades de expendio al público de gasolina y diésel para (X) Estaciones de Servicio; esto para los proyectos que pretende la empresa XXXXXXXXX S.A. DE C.V., representada por el Ing. XXXX que corresponde Conjunta o indistintamente “EL CLIENTE”.\n',
          alignment: 'justify'
      },{
         text:'\nLos servicios ofertados contemplan las prácticas usuales en la industria de hidrocarburos, considerando de manera especial el que los proyectos de infraestructura comprenden la revisión y ejecución de cada una de las disciplinas involucradas. Todos los servicios   ofertados son llevados   a cabo por personal profesional, especializado y con amplia experiencia en el campo que actúan.' 
         ,alignment: 'justify'
      },{
          text:'\nLos servicios se desarrollarán considerando los lineamientos de los organismos reguladores como SENER, CRE, ASEA, normas de referencia nacionales e internacionales, lineamientos y programas definidos conjuntamente entre ACE OIL & GAS S.A. DE C.V. y EL CLIENTE. Para todos los servicios se aplican los métodos y técnicas validadas por la autoridad federal “ASEA”. '
          ,alignment: 'justify'
      },{
          text:'\nPara el cumplimiento de las Disposiciones también se debe contemplar el cumplimiento a las Calibraciones señaladas en el DOF publicado por la entidad regulatoria CRE.'
           ,alignment: 'justify'
      
          ,pageBreak: 'after'
      },
        
      {
        text:'PROPUESTA TÉCNICA' , fontSize:20,bold: true,	alignment: 'center',style: 'header' 
      },{
          text:'2.1. Propuesta Técnica ',bold: true,style: 'subheader'
      },{
          text:'A continuación, se desglosan las partidas involucradas. Se propone el servicio clasificado de la siguiente manera:'
      },{
          text:'\nCONFORMACIÓN DE LOS 18 ELEMENTOS SASISOPA PARA ESTACIONES DE SERVICIO.',bold: true
      },
      {
        ul: [
          'Se elaborará la parte documental del Sistema de Administración (SASISOPA) para obtener dictamen de correspondencia respecto al documento puente y dictamen de resultado de la evaluación técnica del programa de implementación del sistema de administración.'
        ]
      },{
          text:'3.1.1.1 Alcance detallado del Servicio ELABORACION DEL SISTEMA SASISOPA',bold: true
      },
      {
        ul: [
          {text: 'CONFORMACIÓN DE LOS 18 ELEMENTOS SASISOPA PARA ESTACIONES DE SERVICIO:', listType: 'circle',bold: true},
             'El alcance de servicio comprende la elaboración documental de los 18 elementos que conforman el Sistema de Administración de la Seguridad Industrial, Seguridad Operativa y Protección al Ambiente (SASISOPA) para cumplir las Disposiciones Administrativas emitidas en el diario oficial del 16 de junio de 2017 por la Agencia.'
  
          ,{text:'Los Documentos generados se personalizan a la Estación de Servicio, que se indican a continuación:', style: 'header'},
      {
        type: 'upper-roman',
        ol: [
          'Establecimiento, revisión, disponibilidad y comunicación de la política del sistema de administración.',
          'Identificación de peligros y de aspectos ambientales y para la evaluación de riesgos y de impactos ambientales.',
          'Identificación de requisitos legales y otros.',
          'Objetivos, metas e indicadores.',
          'Procedimiento para asegurar la disponibilidad de recursos y establecer las funciones, responsabilidades y autoridad del representante técnico del regulado.',
          'Competencia, capacitación y entrenamiento.',
          'Comunicación, participación y consulta.',
          'Control de documentos y registros.',
          'Mejores prácticas y estándares.',
          'Control de actividades y procesos.',
          'Integridad mecánica y aseguramiento de la calidad.',
          'Seguridad de contratistas.',
          'Preparación y respuesta a emergencias.',
          ' Monitoreo, verificación y evaluación.',
          'Auditorías.',
          'Registro, la investigación y análisis de incidentes y accidentes.',
          'Revisión de resultados.',
          {text:'Elaboración, comunicación y entrega de informes de desempeño.\n\nPara la elaboración de la documentación de los elementos se realizarán los procedimientos utilizando como base la Guía para la conformación del sistema de administración de seguridad industrial, seguridad operativa y protección al medio ambiente aplicable a las actividades de expendio al público de gas natural, gas licuado de petróleo y petrolíferos emitida por la Agencia.\n\n Se entrega con los formatos que deriven de la documentación de cada elemento del Sistema de Administración.Se entregan los 18 mecanismos (procedimientos) de los elementos del Sistema de Administración, debidamente documentados, con la correspondiente generación de los formatos (aprox. 35) propios de cada elemento según corresponda, personalizados a la Estación de Servicio, Corroboración de la documentación entregada con el documento puente \n\nEl Programa de implantación del Sistema de Administración.'}
          
          
        ]
      }
        ]
          
      },{
          
      },{text:'\nVERIFICACIÓN',bold:true, style: 'header'},
      {
        type: 'square',
        ul: [
          'Se emitirá y entregará un Dictamen en original y una copia electrónica, bajo los lineamientos de las disposiciones administrativas de carácter general que establecen los lineamientos para la conformación, implementación y autorización de los Sistemas de Adminsitración de Seguridad Industrial, Seguridad Operativa y Protección al Medio Ambiente aplicables al sector hidrocarburos excepeto de expendio al público de gas natural, distribución y expendio al público de gas licuado de petróleo y petrolíferos, emitida por la empresa Kepler OIL & GAS S.A. DE C.V. como tercero autorizado por la ASEA. ',
        ]
      }
      
      
      
      
      
        
  
      ],
      
      pageSize: 'LETTER',
      pageMargins: [72,150]
  };
    this.pdfObj = pdfMake.createPdf(dd);
    this.pdfObj.download();
  }


 
}
