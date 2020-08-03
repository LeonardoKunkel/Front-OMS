import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';

@Component({
  selector: 'app-punto-dieciseis',
  templateUrl: './punto-dieciseis.page.html',
  styleUrls: ['./punto-dieciseis.page.scss'],
})
export class PuntoDieciseisPage implements OnInit {

  constructor(private navCtrl: NavController, private pdfMaker: PdfMakerService) { }

  ngOnInit() {
  }

  goPuntoProcedimiento() {
    this.navCtrl.navigateForward('/elemento16-investigacion-accidentes');
  }

  goPuntoProcedimiento2() {
    this.navCtrl.navigateForward('/elemento16-arbol-fallas');
  }

  goPuntoFormato() {
    this.navCtrl.navigateForward('/elemento16-causa-raiz');
  }

  goPuntoEstadistica() {
    this.navCtrl.navigateForward('/elemento16-estadistica');
  }
  goEvidencia() {
    this.navCtrl.navigateForward('/punto-dieciseis-evidencia');
  }

  pdf() {
    const dd = {
      header: () => {
        return {
          table: {
            widths: [740], heights: [50, 15, 15],
            body: [
              [{text: ''}],
              [{text: 'XVI. INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES', alignment: 'center', bold: true}],
              [{text: 'COMPROBACIÓN DE HIPÓTESIS DE TRABAJO', alignment: 'center', bold: true, fillColor: '#ddd'}],
            ]
          },
          margin: [22, 15]
        };
      },
      footer: () => {
        return {
          table: {
            headerRows: 1,
            widths: [700],
            body : [
              [{}]
            ]
          },
          layout : 'headerLineOnly',
          margin: [50, 20]
        };
      },
      content: [
        {
          table: {
            widths: [100, 120, 130, 100, 130, 115],
            body: [
              [
                {text: 'DESCRIPCIÓN DEL INCIDENTE:\n\n', bold: true, colSpan: 6},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: 'ID DEL INCIDENTE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {},
                {text: 'FECHA DEL INCIDENTE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {},
                {text: 'FECHA DE ANÁLISIS', bold: true, alignment: 'center', fillColor: '#ddd'},
                {}
              ],
              [
                {text: 'ÁREA O EQUIPO', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: '', colSpan: 2},
                {},
                {text: 'SERVICIO', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: '', colSpan: 2},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 120, 210, 100, 50, 190],
            body: [
              [
                {text: 'OBSERVACIÓN No.     ', colSpan: 2, bold: true},
                {},
                {text: 'DESCRIPCIÓN', colSpan: 4, bold: true},
                {},
                {},
                {}
              ],
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'DESCRIPCIÓN DE LA HIPÓTESIS', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'ACCIÓN DE COMPROBACIÓN', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'RESPONSABLE', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'FECHA', bold: true, alignment: 'center', fillColor: '#ddd'},
                {text: 'RESULTADOS', bold: true, alignment: 'center', fillColor: '#ddd'},
              ],
              [
                {text: '1', alignment: 'center'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '2', alignment: 'center'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '3', alignment: 'center'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '4', alignment: 'center'},
                {},
                {},
                {},
                {},
                {},
              ],
              [
                {text: '5', alignment: 'center'},
                {},
                {},
                {},
                {},
                {},
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 350, 169, 169],
            body: [
              [
                {text: `PERSONAL QUE PARTICIPA EN LA
                        INVESTIGACIÓN CAUSA RAÍZ`, alignment: 'center', fillColor: '#ddd', bold: true, colSpan: 4},
                {},
                {},
                {},
              ],
              [
                {text: 'No.', alignment: 'center', bold: true},
                {text: 'NOMBRE', alignment: 'center', bold: true},
                {text: 'CARGA', alignment: 'center', bold: true},
                {text: 'FIRMA', alignment: 'center', bold: true},
              ],
              [
                {text: '1', alignment: 'center', bold: true},
                {},
                {},
                {}
              ],
              [
                {text: '2', alignment: 'center', bold: true},
                {},
                {},
                {}
              ],
              [
                {text: '3', alignment: 'center', bold: true},
                {},
                {},
                {}
              ],
              [
                {text: '4', alignment: 'center', bold: true},
                {},
                {},
                {}
              ],
            ]
          }
        }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Hipotesis');
  }

  pdf2() {
    const dd = {
      header: () => {
        return {
          table: {
            widths: [560], heights: [50, 15, 15],
            body: [
              [{text: ''}],
              [{text: 'XVI. INVESTIGACIÓN DE INCIDENTES Y ACCIDENTES', alignment: 'center', bold: true}],
              [{text: 'ENTREVISTA DE TESTIGOS PARA LA ICR', alignment: 'center', bold: true, fillColor: '#ddd'}],
            ]
          },
          margin: [22, 15]
        };
      },
      footer: () => {
        return {
          table: {
            headerRows: 1,
            widths: [560],
            body : [
              [{}]
            ]
          },
          layout : 'headerLineOnly',
          margin: [50, 20]
        };
      },
      content: [
        {
          table: {
            widths: [560],
            body: [
              [
                {text: '1. GENERALES', bold: true, fillColor: '#ddd', fontSize: 9},
              ],
              [
                {text: 'Lugar y fecha de la entrevista:', fontSize: 9}
              ],
              [
                {text: 'Nombre del entrevistado:', fontSize: 9}
              ],
              [
                {text: 'Puesto del entrevistado:', fontSize: 9}
              ],
              [
                {text: 'Funciones:', fontSize: 9}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 527],
            body: [
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 9},
                {text: '2. NOMBRES DE LOS PARTICIPANTES O TESTIGOS DEL INCIDENTE', bold: true, fillColor: '#ddd', fontSize: 9}
              ],
              [
                {text: '1', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '2', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '3', alignment: 'center', fontSize: 9},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [25, 527],
            body: [
              [
                {text: 'No.', bold: true, alignment: 'center', fillColor: '#ddd', fontSize: 9},
                {text: `3. EQUIPOS, MATERIALES, VEHÍCULOS, HERRAMIENTAS QUE
                        INTERVINIERON EN EL HECHO`, bold: true, fillColor: '#ddd', fontSize: 9}
              ],
              [
                {text: '1', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '2', alignment: 'center', fontSize: 9},
                {}
              ],
              [
                {text: '3', alignment: 'center', fontSize: 9},
                {}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [560],
            body: [
              [
                {text: '4. CUESTIONAMIENTOS', bold: true, fillColor: '#ddd', fontSize: 9}
              ],
              [
                {text: '1.  ¿Qué actividades realizaba antes de ocurrir el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '2.  ¿Participaron otros trabajadores en el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '3.  ¿En qué condiciones se encontraban los equipos, herramientas, accesorios?\n\n', fontSize: 9}
              ],
              [
                {text: '4.  ¿La herramienta o accesorios eran apropiados para realizar el trabajo?\n\n', fontSize: 9}
              ],
              [
                {text: '5.  ¿Observó alguna condición anormal antes de ocurrir el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '6.  ¿Observó algún acto inseguro antes de ocurrir el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '7.  ¿Cómo ocurrió el incidente?\n\n', fontSize: 9}
              ],
              [
                {text: '8.  ¿Cuántas horas trabajó antes del incidente?\n\n', fontSize: 9}
              ],
            ]
          }
        },
        {text: '\n'},
        {
          table: {
            widths: [276, 276],
            body: [
              [
                {text: '\n\nGamaliel Chavarría\nRepresentante Técnico', alignment: 'center', fontSize: 9},
                {text: '\n\nNombre\nPersonal Entrevistado', alignment: 'center', fontSize: 9}
              ]
            ]
          }
        }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Entrevista');
  }
}
