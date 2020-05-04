import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-representante-modal',
  templateUrl: './representante-modal.page.html',
  styleUrls: ['./representante-modal.page.scss'],
})
export class RepresentanteModalPage implements OnInit {
  datos: any = {
    caracteristicasPersonales: '',
    requerimientosFisicos: '',
    herramientasEquipos: '',
    equipoProteccion: '',
    nivelAcademico: '',
    personalCargo: '',
  };

  constructor(private modalController: ModalController,private pdfMaker: PdfMakerService   ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  enviarForm(formulario) {
    console.log(this.datos);
  }

   print() {
     // playground requires you to assign document definition to a variable called dd

  var dd = {
    header: function(){
      return {
         table: { widths: [565],heights:[50,15,15],
 body: [

   [{text: ''}],
   [{text: 'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO',alignment:'center',bold:true}],
   [{text: 'PERFIL DE PUESTO DE TRABAJO',alignment:'center',bold:true,fillColor: '#e6e6e6'}],
 ]

 }, margin: [22,20]
     };
   },
   footer: function(){
     return {
         table: {
  headerRows: 1,
  widths: [510],
            body : [
            [''],
            [''],
            ['']
                ]
       }, layout : 'headerLineOnly',
         margin: [70, 90]
     };
   },

   content: [
       {
           table: {
               widths: [140, 160, 100, 140],
               heights: [0, 0, 0, 0, 40, 40, 40, 20, 20, 40, 20, 40],
               body: [
                   [
                    {text: 'PUESTO', bold: true},
                    {text: 'Representante Técnico', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'AREA', bold: true},
                    {text: 'Dirección', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'JEFE INMEDIATO', bold: true},
                    {text: 'DIRECCIÓN', colSpan: 3},
                    {},
                    {}
                   ],
                   [
                    {text: 'OBJETIVO DEL PUESTO', bold: true},
                    {text: 'Implementación adecuada y operación del SASISOPA.', colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'FUNCIONES ESPECIFÍCAS', bold: true},
                    {text: `•	El representante técnico analiza las actividades que desarrolla el personal involucrado en el
                              proceso de recibo de producto, almacenamiento y distribución del producto.\n
                            •	Asegurar que el Sistema es conforme con los requisitos establecidos en los lineamientos y
                              demás normativa aplicable. \n
                            •	Informar a la Dirección de la Estación de Servicio acerca del desempeño del Sistema de Administración.\n
                            •	Desarrollar el perfil de cada puesto.\n
                            • Determinar los criterios específicos que definan la competencia necesaria para los diferentes
                              puestos de la organización.\n
                            • Representar a la Estación de Servicio ante la Agencia.\n
                            • Garantizar una eficaz implementación del Sistema de Administración.\n
                            • Proponer la Adopción de las mejores prácticas en materia de Seguridad Industrial,
                              Seguridad Operacional y Protección al Medio Ambiente.\n
                            • Ser capaz de detectar situaciones críticas por las cuales deba informar a la Agencia.\n
                            • Coordinar las acciones necesarias para subsanar los incumplimientos de la normatividad
                              interna y externa aplicable.`,
                     colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'CONOCIMIENTOS ESPECIFÍCOS', bold: true},
                    {text: `•	P-SA-01 POLÍTICA.\n
                            • P-SA-02 IDENTIFICACIÓN DE PELIGROS Y DE ASPECTOS AMBIENTALES PARA LA EVALUACIÓN
                              DE RIESGOS Y DE IMPACTOS AMBIENYTALES.\n
                            • P-SA-03 REQUISITOS LEGALES.\n
                            • P-SA-04 OBJETIVOS, METAS E INDICADORES.\n
                            • P-SA-05 FUNCIONES, RESPONSABILIDADES Y AUTORIDAD.\n
                            • P-SA-06 COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO.\n
                            • P-SA-07 COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA.\n
                            • P-SA-08 CONTROL DE ACTIVIDADES Y PROCESOS.\n
                            • P-SA-09 MEJORES PRÁCTICAS Y ESTÁNDARES\n
                            • P-SA-10 CONTROL DE ACTIVIDADES Y PROCESOS\n
                            • P-SA-11 INTEGRIDAD MECÁNICA\n
                            • P-SA-12 SEGURIDAD DE CONTRATISTAS\n
                            • P-SA-13 PREPARACIÓN Y RESPUESTA A EMERGENCIAS.\n
                            • P-SA-14 MONITOREO, VERIFICACIÓN Y EVALUACIÓN.\n
                            • P-SA-15 AUDITORÍAS.\n
                            • P-SA-16 INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES.\n
                            • P-SA-17 REVISIÓN DE RESULTADOS.\n
                            • P-SA-18 INFORMES DE DESEMPEÑO.`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'CARACTERÍSTICAS PERSONALES', bold: true},
                    {text: `${this.datos.caracteristicasPersonales}`},
                    {text: 'DESTREZAS TÉCNICAS', bold: true},
                    {text: '•Comunicación\n•Responsabilidad\n•Amabilidad\n•Proactividad'}
                   ],
                   [
                    {text: 'NIVEL ACADEMICO REQUERIDO', bold: true},
                    {text: `${this.datos.nivelAcademico}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'REQUERIMIENTOS FÍSICOS', bold: true},
                    {text: `${this.datos.requerimientosFisicos}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'PERSONAL A SU CARGO', bold: true},
                    {text: `${this.datos.personalCargo}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'HERRAMIENTAS Y O EQUIPOS', bold: true},
                    {text: `${this.datos.herramientasEquipos}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ],
                   [
                    {text: 'EQUIPO DE PROTECCION PERSONAL', bold: true},
                    {text: `${this.datos.equipoProteccion}`, colSpan: 3, alignment: 'justify'},
                    {},
                    {}
                   ]
              ]
           }
       },
       {
          text: '\n\n'
       },
       {
           table: {
                widths: [175, 185, 185],
                heights: [50],
                body: [
                   ['REVISADO POR:\n\n\n\n Roberto Muñoz Torres REPRESENTANTE TÉCNICO', 'APROBADO POR:\n\n\n\nFernando Bedoy Ruiz', 'FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2018"']
                ]
           }
       }

   ],
   pageSize: 'LETTER',
   pageMargins: [22, 130]
};
  this.pdfMaker.generate(dd, 'Perfil del Representante');
   }
}
