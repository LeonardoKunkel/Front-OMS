import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { and } from '@angular/router/src/utils/collection';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-punto-siete',
  templateUrl: './punto-siete.page.html',
  styleUrls: ['./punto-siete.page.scss'],
})
export class PuntoSietePage implements OnInit {
  datos: any = {
    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',
    C10: '',
    C11: '',
    C12: '',
    C13: '',
    C14: '',
    C15: '',
    C16: '',
    C17: '',
    C18: '',
    C19: '',
    C20: '',
    C21: '',
    C22: '',
    C23: '',
    C24: '',
    C25: '',
    C26: '',
    C27: '',
    C28: '',
    C29: '',
    C30: '',
    C31: '',
    C32: '',
    C33: '',
    C34: '',
    C35: '',
    C36: '',
    C37: '',
    C38: '',
    C39: '',
    C40: '',
    C41: '',
  };

  @ViewChild('slider') slider: IonSlides;

  constructor( private pdfMaker: PdfMakerService) {
  }

  ngOnInit() {

  }
  enviarForm(formulario) {
    console.log(this.datos);
  }

  pdf() {
    const dd = {
      header: function() {
        return {
          table: {
            widths: [740], heights: [50, 15, 15],
            body: [
              [{text: ''}],
              [{text: 'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA', alignment: 'center', bold: true}],
              [{text: 'LISTA DE COMUNICACIÓN', alignment: 'center', bold: true, fillColor: '#ddd'}],
            ]
          },
          margin: [22, 15]
        };
      },
      footer: function() {
        return {
          table: {
            headerRows: 1,
            widths: [750],
            body: [
              [''],
              [''],
              ['']
            ]
          },
          layout : 'headerLineOnly',
          margin: [30, 85]
        };
      },
      content: [
          {
              table: {
                  widths: [220, 260, 220, 13],
                  body: [
                      [
                          {text: 'Tema a difundir', bold: true, fillColor: '#ddd', alignment: 'center'},
                          {text: 'Personal a quien fue distribuida la información', bold: true, fillColor: '#ddd', alignment: 'center'},
                          {text: '¿A través de qué medio obtuvo la información?', bold: true, fillColor: '#ddd', alignment:'center', colSpan: 2},
                      ],
                      [
                          {text: 'Política', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Jefe de piso\nPersonal de mantenimiento\nProveedores y contratistas\nDespachadores\nEncargado', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C1}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C2}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C3}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C4}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C5}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C6}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C7}`}
                      ],
                      [
                          {text: 'Identificación de riesgos y aspectos ambientales', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Jefe de piso\nPersonal de mantenimiento\nProveedores y contratistas\nDespachadores', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C8}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C9}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C10}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C11}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C12}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C13}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C14}`}
                      ],
                      [
                          {text: 'Requisitos legales vigentes', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C15}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C16}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C17}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C18}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C19}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C20}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C21}`}
                      ],
                      [
                          {text: 'Cumplimiento', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado\nRepresentante técnico', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C22}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C23}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C24}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C25}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C26}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C27}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C28}`}
                      ],
                      [
                          {text: 'Resultados de evaluación', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado\nRepresentante técnico', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C29}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C30}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C31}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C32}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C33}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C34}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C35}`}
                      ],
                      [
                          {text: 'Resultados de auditoría', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Representante técnico\nDirección', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C36}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C37}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C38}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C39}`}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C40}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C41}`}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C42}`}
                      ],
                  ]
              }
          }
      ],
      pageOrientation: 'landscape',
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Lista_de_Comunicacion');
  }
}
