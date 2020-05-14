import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
import { JefePisoServiceService } from '../../services/Elemento 6/jefe-piso-service.service'

@Component({
  selector: 'app-jefe-piso-modal',
  templateUrl: './jefe-piso-modal.page.html',
  styleUrls: ['./jefe-piso-modal.page.scss'],
})
export class JefePisoModalPage implements OnInit {
  datos: any = {
    caracteristicasPersonales: '',
    requerimientosFisicos: '',
    herramientasEquipos: '',
    equipoProteccion: '',
    nivelAcademico: '',
    personalCargo: ''
  };

  constructor(
    private modalController: ModalController ,
    private pdfMaker: PdfMakerService,
    private jefeService: JefePisoServiceService
    ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  enviarForm(formulario) {
    console.log(this.datos);
  }

 crearJefe() {
   this.jefeService.createJefe(this.datos).subscribe((data: any) => {
     console.log(data);
   });
 }

  print() {
     // playground requires you to assign document definition to a variable called dd

    const dd = {
     header: () => {
       return {
        table: {
          widths: [565],
          heights: [50, 15, 15],
          body: [
            [{text: ''}],
            [{text: 'VI. COMPETENCIA DEL PERSONAL, CAPACITACIÓN Y ENTRENAMIENTO', alignment: 'center', bold: true}],
            [{text: 'PERFIL DE PUESTO DE TRABAJO', alignment: 'center', bold: true, fillColor: '#e6e6e6'}],
          ]
        }, margin: [22, 20]
       };
     },
     footer: () => {
       return {
           table: {
            headerRows: 1,
            widths: [510],
            body: [
              [''],
              [''],
              ['']
            ]
         },
         layout : 'headerLineOnly',
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
                      {text: 'Jefe de Piso', colSpan: 3},
                      {},
                      {}
                     ],
                     [
                      {text: 'ÁREA', bold: true},
                      {text: 'SASISOPA', colSpan: 3},
                      {},
                      {}
                     ],
                     [
                      {text: 'JEFE INMEDIATO', bold: true},
                      {text: 'Jefe de Estación de Servicio', colSpan: 3},
                      {},
                      {}
                     ],
                     [
                      {text: 'OBJETIVO DEL PUESTO', bold: true},
                      {text: `Atender y getionar todo lo relacionado en la parte operativa de la
                              Estación de Servicio.`, colSpan: 3, alignment: 'justify'},
                      {},
                      {}
                     ],
                     [
                      {text: 'FUNCIONES ESPECIFÍCAS', bold: true},
                      {text: `•	Atender las necesidades técnicas cuando el Encargado de la Estación de Servicio no esté disponible.\n
                              •	Participar en la Planeación del Trabajo y en la identificación y aplicaciónde medidas de seguridad.\n
                              •	Apegarse a las políticas de seguridad de la estación de servicio.\n
                              •	Portar el equipo de protección personal.\n
                              • Cumplir con los procedimientos de Operación y Mantenimiento de la
                                NOM-005-ASEA-2016.`, colSpan: 3, alignment: 'justify'},
                      {},
                      {}
                     ],
                     [
                      {text: 'CONOCIMIENTOS ESPECIFÍCOS', bold: true},
                      {text: `•	Conocimiento y aplicación de procedimientos de Operación, Mantenimiento
                                y Trabajo Seguro de la Estación de Servicio.\n
                              • Conocimientos de la metodología de despacho.\n
                              • Conocimientos del plan anual de mantenimiento`, colSpan: 3, alignment: 'justify'},
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
                     ],
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
              [
                'REVISADO POR:\n\n\n\n Gamaliel Chavarría REPRESENTANTE TÉCNICO',
                'APROBADO POR:\n\n\n\nSergio Lechuga',
                'FECHA DE APROBACIÓN:\n\n\n\nAgregar fecha "10/10/2020"'
              ]
            ]
          }
         }

     ],
     pageSize: 'LETTER',
     pageMargins: [22, 130]
   };
    this.pdfMaker.generate(dd, 'Perfil de Jefe de Piso');
  }
}
