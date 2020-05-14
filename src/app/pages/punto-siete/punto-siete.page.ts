import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { PdfMakerService } from 'src/app/services/pdf-maker.service';
@Component({
  selector: 'app-punto-siete',
  templateUrl: './punto-siete.page.html',
  styleUrls: ['./punto-siete.page.scss'],
})
export class PuntoSietePage implements OnInit {

  datos: any = {
    C1: false,
    C2: false,
    C3: false,
    C4: false,
    C5: false,
    C6: false,
    C7: false,
    C8: false,
    C9: false,
    C10: false,
    C11: false,
    C12: false,
    C13: false,
    C14: false,
    C15: false,
    C16: false,
    C17: false,
    C18: false,
    C19: false,
    C20: false,
    C21: false,
    C22: false,
    C23: false,
    C24: false,
    C25: false,
    C26: false,
    C27: false,
    C28: false,
    C29: false,
    C30: false,
    C31: false,
    C32: false,
    C33: false,
    C34: false,
    C35: false,
    C36: false,
    C37: false,
    C38: false,
    C39: false,
    C40: false,
    C41: false,
    C42: false,
  };

  @ViewChild('slider') slider: IonSlides;

  constructor( private pdfMaker: PdfMakerService, public toast: ToastController) {
  }

  ngOnInit() {

  }

  async enviarForm(formulario) {
    console.log(this.datos);
    // for (let i in this.datos) {
    //     if (this.datos[i] === true && this.datos[i] >= 1) {
    //         this.datos[i] = 'X';
    //     }
    // }
    if (this.datos.C1) {
        this.datos.C1 = 'X';
    } else {
        this.datos.C1 = '--';
    }

    const toast = await this.toast.create({
        message: 'Datos guardados',
        duration: 2000
    });
    toast.present();
  }

  pdf() {
    const dd = {
      header: () => {
        return {
          table: {
            widths: [562],
            heights: [50, 15, 15],
            body: [
              [{text: ''}],
              [{text: 'VII. COMUNICACIÓN, PARTICIPACIÓN Y CONSULTA', alignment: 'center', bold: true}],
              [{text: 'LISTA DE COMUNICACIÓN', alignment: 'center', bold: true, fillColor: '#ddd'}],
            ]
          },
          margin: [22, 15]
        };
      },
      footer: () => {
        return {
          table: {
            headerRows: 1,
            widths: [562],
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
                  widths: [176, 197, 148, 13],
                  body: [
                      [
                          {text: 'Tema a difundir', bold: true, fillColor: '#ddd', alignment: 'center'},
                          {text: 'Personal a quien fue distribuida la información', bold: true, fillColor: '#ddd', alignment: 'center'},
                          {text: '¿A través de qué medio obtuvo la información?',
                           bold: true, fillColor: '#ddd', alignment: 'center', colSpan: 2},
                          {}
                      ],
                      [
                          {text: 'Política', bold: true, alignment: 'center', rowSpan: 7},
                          {text: `Jefe de piso\n
                                  Personal de mantenimiento\n
                                  Proveedores y contratistas\n
                                  Despachadores\n
                                  Encargado`, alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C1}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C2}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C3}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C4}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C5}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C6}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C7}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Identificación de riesgos y aspectos ambientales', bold: true, alignment: 'center', rowSpan: 7},
                          {text: `Jefe de piso\n
                                  Personal de mantenimiento\n
                                  Proveedores y contratistas\n
                                  Despachadores`, alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C8}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C9}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C10}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C11}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C12}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C13}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C14}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Requisitos legales vigentes', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C15}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C16}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C17}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C18}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C19}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C20}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C21}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Cumplimiento', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado\nRepresentante técnico', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C22}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C23}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C24}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C25}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C26}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C27}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C28}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Resultados de evaluación', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Encargado\nRepresentante técnico', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C29}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C30}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C31}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C32}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C33}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C34}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C35}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: 'Resultados de auditoría', bold: true, alignment: 'center', rowSpan: 7},
                          {text: 'Representante técnico\nDirección', alignment: 'center', rowSpan: 7},
                          {text: 'Correo'},
                          {text: `${this.datos.C36}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Pláticas'},
                          {text: `${this.datos.C37}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Trípticos'},
                          {text: `${this.datos.C38}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Lonas'},
                          {text: `${this.datos.C39}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: '', alignment: 'center'},
                          {text: 'Oficios'},
                          {text: `${this.datos.C40}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Tablero de información'},
                          {text: `${this.datos.C41}`, alignment: 'center', fontSize: 9}
                      ],
                      [
                          {text: ''},
                          {text: ''},
                          {text: 'Carteles'},
                          {text: `${this.datos.C42}`, alignment: 'center', fontSize: 9}
                      ],
                  ]
              }
          },
          {
            text: '\n\n'
           },
           {
            table: {
              widths: [277, 277],
              heights: [50],
              body: [
                [
                  'REVISADO POR:\n\n\n\n Gamaliel Chavarría\nREPRESENTANTE TÉCNICO',
                  'APROBADO POR:\n\n\n\nSergio Lechuga\nMÁXIMA AUTORIDAD',
                ]
              ]
            }
           }
      ],
      pageSize: 'LETTER',
      pageMargins: [22, 120]
    };
    this.pdfMaker.generate(dd, 'Lista_de_Comunicacion');
  }
}
